import { AxiosError } from "axios";
import { api } from "../axios";

export const createBook = async (bookData: { name: string; streaming: string; category: number[] }) => {
  console.log("Enviando para a API:", bookData); 

  try {
    const response = await api.post("/livros/", bookData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Erro ao criar livro:", error.response?.data || error.message);
    } else {
      console.error("Erro inesperado:", error);
    }
    throw error;
  }
};
