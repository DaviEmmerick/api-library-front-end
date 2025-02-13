import { useState } from "react";
import { Container, Book, Text, Select, Crud, SubText } from "./index.styles";
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js";
import { useCreateBook } from "../../services/serviceCreateBook/hooks/useCreateBook.js";
import { CreateBookModal } from "../../components/modal/CreateBookModal.js";

export const Interaction = () => {
  const { t } = useTranslation();
  
  const { mutate: createBook, isPending } = useCreateBook();
  const [createdBook, setCreatedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleCreate = () => {
    createBook(
      { 
        name: "Livro Exemplo", 
        streaming: "F",  // Ou "K" 
        category: [1] 
      },
      {
        onSuccess: (newBook) => setCreatedBook(newBook),
        onError: (error) => console.error("Erro ao criar livro:", error),
      }
    );
  };

  const openModal = () => setIsModalOpen(true); // Função para abrir o modal
  const closeModal = () => setIsModalOpen(false); // Função para fechar o modal

  return (
    <>
      <Container>

        <div id="criar">
          <Book src="src/assets/book1.jpg" alt="" />
          <Select>
            <Text> {t("create_book")} </Text>
            <SubText> {t("suggestions_create")} </SubText>
            <Crud onClick={openModal} disabled={isPending}>
              {isPending ? "Criando..." : t("create")}
            </Crud>
          </Select>
        </div>

        {/* Exibe o livro criado */}
        {createdBook && (
          <div>
            <h2>Livro Criado:</h2>
            <p><strong>Título:</strong> {createdBook.name}</p>
            <p><strong>Streaming:</strong> {createdBook.streaming}</p>
          </div>
        )}

      </Container>

      {/* Modal para criar um novo livro */}
      <CreateBookModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
