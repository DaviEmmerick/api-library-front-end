import { Footer } from "../../components/footer";
import { HeaderPage } from "../../components/header";
import { Clock, Email, Location, Main, Whatsapp, Title, Section, Text, Space, 
         LineHeight, Form, Label, Input, Textarea, Button } from "./index.styles";
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js"; 

export const Contact = () => {

  const { t } = useTranslation();

  return (
    <div>
      <HeaderPage />
      <Main>
        <div>
          <Form>
            <Label>
              {t("name")}
              <Input type="text" name="name" required />
            </Label>
            <Label>
              {t("email")}
              <Input type="email" name="email" required />
            </Label>
            <Label>
              {t("message")}
              <Textarea name="message" required ></Textarea>
            </Label>
            <Button type="submit"> {t("submit")} </Button>
          </Form>
        </div>
        <Section>
          <Space>
            <div>
              <Title> {t("contacts")} </Title>
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
              <Title> {t("location")}  </Title>
              <LineHeight>
                <Location />
                <Text>Rua das Oliveiras, n 45, Niterói-RJ</Text>
              </LineHeight>
            </div>
            <div>
              <Title> {t("days")} </Title>
              <LineHeight>
                <Clock />
                <Text> {t("opening")} </Text>
              </LineHeight>
              <LineHeight>
                <Clock />
                <Text> {t("clock")} </Text>
              </LineHeight>
            </div>
          </Space>
        </Section>
      </Main>
      <Footer />
    </div>
  );
};
