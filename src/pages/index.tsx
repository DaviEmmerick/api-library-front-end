import { Background, Header, Options, Title, SubTitles, Text, Information, Slogan, 
         Colors, About, Contact, Style, ChangeLanguage, Icon, Flags } from "./index.styles"; 
import "../locales/i18n.js";
import { useTranslation } from "react-i18next";
import { useRef } from "react";


export const HomePage = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  const aboutRef = useRef<HTMLElement | null>(null);

  const scrollToAbout = () => {
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  

  return (
    <div>
      <Background>
        <Header>
          <Options>
            <div>
              <Title><strong><Style>{t("LUMO")}</Style> {t("title")}</strong></Title>
            </div>

            <SubTitles>
              <a href="#criar">{t("create_book")}</a>
              <a href="#deletar">{t("delete_book")}</a>
              <a href="#sugestoes">{t("suggestions")}</a>
            </SubTitles>
          </Options>
        </Header>


        <ChangeLanguage>
          <p>IDIOMA:</p>

          <Flags>
            <button onClick={() => changeLanguage("pt")}>
              <Icon src="src\assets\brasil.png" alt="Português" />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <Icon src="src\assets\estados-unidos.png" alt="English" />
            </button>
          </Flags>
        </ChangeLanguage>

        <Information>
          <Text>{t("illuminating")} <Colors>{t("stories")}</Colors></Text>
          <Slogan>{t("slogan")}</Slogan>

          <About onClick={scrollToAbout}>{t("about_us")}</About> 
          <Contact>{t("contact")}</Contact>
        </Information>
      </Background>

      <section id="about" ref={aboutRef}>


      </section>
    </div>
  );
};