import { useState } from "react";
import { Container, Book, Text, Select, Crud, SubText } from "./index.styles";
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js";
import { useCreateBook } from "../../services/serviceCreateBook/hooks/useCreateBook.js";
import { CreateBookModal } from "../../components/modal/CreateBookModal.js";
import { BookData } from "../../@types/book.js";

export const Interaction = () => {
  const { t } = useTranslation();
  const { mutate: createBook, isPending } = useCreateBook();
  const [createdBook, setCreatedBook] = useState<BookData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateBook = (bookData: BookData) => {
    createBook(bookData, {
      onSuccess: (newBook) => {
        setCreatedBook(newBook);
        setIsModalOpen(false);
      },
      onError: (error) => console.error("Erro ao criar livro:", error),
    });
  };

  return (
    <>
      <Container>
        <div id="criar">
          <Book src="src/assets/book1.jpg" alt="" />
          <Select>
            <Text> {t("create_book")} </Text>
            <SubText> {t("suggestions_create")} </SubText>
            <Crud onClick={() => setIsModalOpen(true)} disabled={isPending}>
              {isPending ? "Criando..." : t("create")}
            </Crud>
          </Select>
        </div>

        <div id="deletar">
          <Book src="src\assets\book2.jpg" alt="" />
          <Select>
            <Text> {t("delete_book")} </Text>
            <SubText> {t("suggestions_delete")} </SubText>
            <Crud> {t("delete")} </Crud>
          </Select>
        </div>

        <div id="sugestoes">
          <Book src="src\assets\book3.jpg" alt="" />
          <Select>
            <Text> {t("random_book")} </Text>
            <SubText> {t("suggestions_random")} </SubText>
            <Crud> {t("suggestion")} </Crud>
          </Select>
        </div>

        {createdBook && (
          <div>
            <h2>Livro Criado:</h2>
            <p><strong>Título:</strong> {createdBook.name}</p>
            <p><strong>Streaming:</strong> {createdBook.streaming}</p>
          </div>
        )}
      </Container>

      <CreateBookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateBook} 
      />
    </>
  );
};