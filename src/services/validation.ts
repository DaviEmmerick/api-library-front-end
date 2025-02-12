import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .refine((val) => val.split(" ").length > 1, {
      message: "O nome deve conter pelo menos um sobrenome",
    }),
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "E-mail é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export type ContactFormData = z.infer<typeof formSchema>;
