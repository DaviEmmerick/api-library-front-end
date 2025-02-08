import { Background, Text, Information, Slogan, Colors, About, Contact } from "./index.styles"; 
import "../../locales/i18n.js"; 
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { HeaderPage } from "../../components/header/index.tsx";  

export const HomePage = () => {
  const { t } = useTranslation(); 

  return (
    <div> 
      <Background>
      <HeaderPage /> 
        <Information>
          <Text>{t("illuminating")} <Colors>{t("stories")}</Colors></Text>
          <Slogan>{t("slogan")}</Slogan>

          <About>
            <Link to="/about">{t("about_us")}</Link>   
          </About> 
          <Contact>{t("contact")}</Contact>
        </Information>
      </Background>
    </div>
  );
};
