import { Container, Book, Text, Select, Crud, SubText} from "./index.styles"
import { useTranslation } from "react-i18next";
import "../../locales/i18n.js"; 

export const Interaction = () => {

  const { t } = useTranslation();


  return (
    <>
      <Container>

        <div id="criar">
          <Book src="src\assets\book1.jpg" alt="" />
          <Select>
            <Text> {t("create_book")} </Text>
            <SubText> {t("suggestions_create")} </SubText>
            <Crud> {t("create")} </Crud>
          </Select>
        </div>

        <div id="deletar">
          <Book src="src\assets\book2.jpg" alt="" />
          <Select>
            <Text> {t("delete_book")} </Text>
            <SubText> {t("suggestions_delete")} </SubText>
            <Crud> {t("delete")} </Crud>
          </Select>
        </div>

        <div id="sugestoes">
          <Book src="src\assets\book3.jpg" alt="" />
          <Select>
            <Text> {t("random_book")} </Text>
            <SubText> {t("suggestions_random")} </SubText>
            <Crud> {t("suggestion")} </Crud>
          </Select>
        </div>

        
      </Container>
    </>
  )
}