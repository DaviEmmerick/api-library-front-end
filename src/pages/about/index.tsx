import { HeaderPage } from '../../components/header';
import { Container, LibraryText, BooksImage } from './index.styles';
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js"; 

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section>
      <HeaderPage />
      <Container>
        <LibraryText>
          {t("library_text")}
        </LibraryText>
        <BooksImage src="src/assets/e-books.png" alt="BooksImage" />
      </Container>
    </section>
  );
};
