import React, { useState } from "react";
import { useCreateBook } from "../../services/serviceCreateBook/hooks/useCreateBook";
import Modal from "react-modal";
import { Button, Input, Label, ModalContent, Select, Title } from "./index.styles";
import "../../locales/i18n.js"; 
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

export const CreateBookModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { mutate: createBook, isPending, error } = useCreateBook();

  const [bookData, setBookData] = useState({
    name: "",
    streaming: "F", // "F" ou "K"
    category: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBook(bookData, {
      onSuccess: (data) => {
        console.log("Livro criado com sucesso!", data);
        onClose();
      },
      onError: (error) => {
        console.log("Erro ao criar livro:", error);
      },
    });
  };

  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Criar Livro"
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      content: {
        border: "none", 
        background: "white",
        width: "400px",
        height: "auto",
        inset: "auto", 
      }, }}>

      <>
        <ModalContent>
          <Title> {t("create_books")} </Title>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="name"> {t("number")} </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              required
            />

            <Label htmlFor="streaming"> {t("streaming")} </Label>
            <Select
              id="streaming"
              name="streaming"
              value={bookData.streaming}
              onChange={handleChange}
              required
            >
              <option value="F"> {t("F")} </option>
              <option value="K">Kindle</option>
            </Select>

            <Label htmlFor="category"> {t("category")} </Label>
            <Input
              type="text"
              id="category"
              name="category"
              value={bookData.category.join(", ")}
              onChange={handleChange}
              placeholder="IDs das categorias (separados por vírgula)"
            />

            <Button type="submit" disabled={isPending}>
              {isPending ? "Criando..." : t("send")}
            </Button>
          </form>

          {error && <p style={{ color: "red" }}>{error.message}</p>}

          <Button onClick={onClose}>
            {t("close")}
          </Button>
        </ModalContent>
      </>
    </Modal>
  );
};
