import styled from 'styled-components';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const Main = styled.div`
  margin-top: 15rem;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: rgb(0, 0, 0, .4);
  width: 90%;
  margin: 0 auto; 
`;

export const Section = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-block: 3rem;
  padding-left: 5rem;
`;

export const Title = styled.span`
  color: #FF9E40;
  font-size: 1rem;
`;

export const Text = styled.p`
  font-size: 1.1rem;
`;

export const BackToTheTop = styled.button`
  width: 10rem;
  height: 2.7rem;
  font-weight: bold;
  background-color: white; 
  border: 1px solid #000;
  font-size: .9rem;
  transition: background-color 0.8s ease, color 0.8s ease, border-color 0.8s ease;

  &:hover {
    background-color: black; 
    color: white; 
    border-color: black; 
  }
`;

export const Icons = styled.div`
  margin-block: 1.5rem;
  margin-left: 1rem;
`;

export const Linkedin = styled(FaLinkedin)`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
`;

export const Github = styled(FaGithub)`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
`;

export const Instagram = styled(BsInstagram)`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
`;

export const Copy = styled.p`
  font-size: .7rem;
  margin-block: 2.5rem;
  padding-left: 5rem;
`;

export const Terms = styled.a`
  display: flex;
  justify-content: flex-end;
  padding-right: 5rem;
  font-size: .7rem;
  transform: translateY(-3.8rem);
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: absolute;
  right: 5rem;
  margin-top: -16rem; //Alterar depois
`;

export const Marketing = styled.p`
  font-size: .8rem;
  line-height: 2rem;
  margin-top: 0;
`;

