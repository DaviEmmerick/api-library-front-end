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
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: white;
  align-content: center;
  max-width: 50rem;

`;


export const Title = styled.p`
  font-size: 1.1rem;
  margin-top: .4rem;
  max-width: 3.5rem;
  margin-left: 8rem;
  line-height: 1.5rem;

`;

export const SubTitles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
`;

export const Information = styled.div`
  margin-left: 8rem;
  margin-block: 10rem;
  max-width: 30rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: .2rem;
  
`;

export const Text = styled.p`
  color: #FF9E40;
  font-size: 2.62rem;
`;

export const Style = styled.p`
  color: #FF9E40;
`;

export const Colors = styled.span`
  color: white;
`;

export const Slogan = styled.p`
  color: white;
  font-size: 1rem;
  margin-block: 1.5rem;
`;

export const About = styled.button`
  width: 8rem;
  height: 2.7rem;
  font-weight: bold;
  background-color: white; 
  border: 2px solid transparent;
  font-size: .9rem;
  transition: background-color 0.8s ease, color 0.8s ease, border-color 0.8s ease;

  &:hover {
    background-color: black; 
    color: white; 
    border-color: black; 
  }
`;

export const Contact = styled.button `
  border: .1rem solid white;
  width: 8rem;
  height: 2.7rem;
  color: white;
  font-weight: bold;
  border: 2px solid white;
  margin-left: 1.5rem;
  transition: background-color 0.8s ease, color 0.8s ease, border-color 0.8s ease;

  &:hover {
    background-color: white; 
    color: black; 
  }
`;

export const ChangeLanguage = styled.p`
  display: flex;
  justify-content: flex-end;
  color: white;
  padding-right: 6rem;
  transform: translateY(1rem);
  gap: 1rem;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Flags = styled.div`
  transform: translateY(-.15rem);
  
  :last-child{
    margin-left: .15rem;
  }
  
`;