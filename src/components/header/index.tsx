import { useTranslation } from "react-i18next";
import { Header, Options, Title, Style, ChangeLanguage, Flags, Icon, Tag } from "./index.styles";

export const HeaderPage = () => {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Header>
        <Options>
        <Tag>
          <Title>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong>
                <Style>{t("LUMO")}</Style> {t("title")}
              </strong>
            </a>
          </Title>
        </Tag>

        </Options>
      </Header>

      <ChangeLanguage>
        <p>IDIOMA:</p>
        <Flags>
          <button onClick={() => changeLanguage("pt")}>
            <Icon src="src/assets/brasil.png" alt="Português" />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <Icon src="src/assets/estados-unidos.png" alt="English" />
          </button>
        </Flags>
      </ChangeLanguage>
    </div>
  );
};
