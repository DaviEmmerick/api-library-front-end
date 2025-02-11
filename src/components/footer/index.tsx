import { 
  Main, Line, Section, BackToTheTop, Title, Text, Linkedin, Icons, 
  Github, Instagram, Copy, Terms, Topics, Marketing  } from "./index.styles";
import "../../locales/i18n.js"; 
import { useTranslation } from "react-i18next";

export const Footer = () => {

  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Main>
      <Line />

      <Section>
        <Text>
          <Title> {t("title")} </Title> {t("subtitle")}
        </Text>
        <BackToTheTop onClick={scrollToTop}> {t("back")} </BackToTheTop>
        <Icons>
          <a href="https://www.linkedin.com/in/davi-emmerick/" target="_blank">
            <Linkedin />
          </a>
          <a href="https://github.com/DaviEmmerick" target="_blank">
            <Github />
          </a>
          <a href="https://www.instagram.com/emmerickdavi/" target="_blank">
            <Instagram /> 
          </a>
        </Icons>
      </Section>

      <div>
        <Topics>
          <Marketing> {t("marketing_books")} </Marketing>
          <Marketing> {t("marketing_explore")} </Marketing>
          <Marketing> {t("marketing_news")}  </Marketing>
          <Marketing> {t("marketing_indicate")} </Marketing>
        </Topics>
      </div>

      <div>
        <Line />
        <Copy> {t("copy")} </Copy>
        <Terms href="src/assets/TERMOS DE SERVIÇO DA LUMO LIVRARIA.pdf" target="_blank">
          {t("terms")}
        </Terms>
      </div>
    </Main>
  );
};
