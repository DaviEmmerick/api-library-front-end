import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "..";
import { Book } from "../../../@types/book";

export const useCreateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBook,
    onSuccess: (newBook: Book) => {
      queryClient.setQueryData<Book[]>(["books"], (oldBooks) => {
        return [...(oldBooks ?? []), newBook]; 
      });
    },
  });
};
