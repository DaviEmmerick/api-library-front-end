import React, { useState } from "react";
import { useCreateBook } from "../../services/serviceCreateBook/hooks/useCreateBook";
import Modal from "react-modal";

Modal.setAppElement("#root"); 

export const CreateBookModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { mutate: createBook, isPending, error } = useCreateBook();
  
  const [bookData, setBookData] = useState({
    name: "",
    streaming: "F",  // "F" ou "K"
    category: [],     // IDs das categorias
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Criar Livro">
      <h2>Criar Livro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome do Livro</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="streaming">Tipo de Streaming</label>
          <select
            id="streaming"
            name="streaming"
            value={bookData.streaming}
            onChange={handleChange}
            required
          >
            <option value="F">Físico</option>
            <option value="K">Kindle</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            id="category"
            name="category"
            value={bookData.category.join(", ")} // Para entrada de múltiplos IDs
            onChange={handleChange}
            placeholder="IDs das categorias (separados por vírgula)"
          />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Criando..." : "Criar Livro"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};