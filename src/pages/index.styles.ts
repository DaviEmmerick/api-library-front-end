import styled from "styled-components";
import fundo from "../assets/assets3.jpg"; 

export const Background = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  max-height: 5rem;
  background-color: red;
`;
