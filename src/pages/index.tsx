import { Background, Header, Options, Title, Span, SubTitles, Text, Information, Slogan, Colors, About, Contact } from "./index.styles"; 

export const HomePage = () => {
  return (
    <div>
      <Background>
        <Header>
          <Options>
            <div>
              <Title><strong><Span>LIVRARIA</Span> LUMO</strong></Title>
            </div>
            <SubTitles>
              <a href ="#criar">CRIAR LIVRO</a>
              <a href ="#deletar">DELETAR LIVRO</a>
              <a href ="#sugestoes">SUGESTÕES</a>
            </SubTitles>
          </Options>
        </Header>


        <Information>
          <Text>Iluminando <Colors>histórias, inspirando leitores</Colors></Text>
          <Slogan>Um lugar ideal para criar, avaliar e pedir sugestões de novos livros!</Slogan>

          <About> SOBRE NÓS</About> 
          <Contact> CONTATO </Contact>

        </Information>

      </Background>
    </div>
  );
};
