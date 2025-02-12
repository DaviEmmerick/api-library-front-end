import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Footer } from "../../components/footer";
import { HeaderPage } from "../../components/header";
import { Clock, Email, Location, Main, Whatsapp, Title, Section, Text, Space, 
         LineHeight, Form, Label, Input, Textarea, Button, Error } from "./index.styles";
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js"; 
import { formSchema, ContactFormData } from "../../services/validation.js"; 

export const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const errors: { [key: string]: string } = {}; 
      result.error.errors.forEach((err) => {
        const field = err.path[0]; 
        errors[field] = err.message; 
      });
      setFormErrors(errors); 
      return;
    }

    try {
      await emailjs.send(
        "service_t96llmh", 
        "template_sh52j1o", 
        formData,
        "WCCQ0lT1oyQbZIllD" 
      );
      alert("E-mail enviado com sucesso!");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({}); 
    } catch (error) {
      alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
      console.error("Erro ao enviar e-mail:", error);
    }
  };

  return (
    <div>
      <HeaderPage />
      <Main>
        <div>
          <Form onSubmit={handleSubmit}>
            <Label>
              {t("name")}
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Error>
                {formErrors.name && <span>{formErrors.name}</span>} 
              </Error>
            </Label>
            <Label>
              {t("email")}
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Error>
                {formErrors.email && <span>{formErrors.email}</span>}
              </Error> 
            </Label>
            <Label>
              {t("message")}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Error>
                {formErrors.message && <span>{formErrors.message}</span>} 
              </Error>
            </Label>
            <Button type="submit">{t("submit")}</Button>
          </Form>
        </div>
        <Section>
          <Space>
            <div>
              <Title>{t("contacts")}</Title>
              <LineHeight>
                <Whatsapp />
                <Text>(21) 97205-7307</Text>
              </LineHeight>
              <LineHeight>
                <Email />
                <Text>daviemmerick2019@gmail.com</Text>
              </LineHeight>
            </div>
            <div>
              <Title>{t("location")}</Title>
              <LineHeight>
                <Location />
                <Text>Rua das Oliveiras, n 45, Niterói-RJ</Text>
              </LineHeight>
            </div>
            <div>
              <Title>{t("days")}</Title>
              <LineHeight>
                <Clock />
                <Text>{t("opening")}</Text>
              </LineHeight>
              <LineHeight>
                <Clock />
                <Text>{t("clock")}</Text>
              </LineHeight>
            </div>
          </Space>
        </Section>
      </Main>
      <Footer />
    </div>
  );
};