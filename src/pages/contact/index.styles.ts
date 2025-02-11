import styled from 'styled-components';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 30rem;
  margin: auto;
  padding: 2rem;
  background: #f9f9f9;
  margin-left: 15rem;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: white;
    border: 1px solid #000;
    color: #000;
  }
`;

export const Whatsapp = styled(FaWhatsapp)`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Email = styled(MdEmail)`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Location = styled(FaLocationDot)`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Clock = styled(CiClock2)`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const LineHeight = styled.div`
  display: flex;
  gap: .8rem;
  padding-bottom: .5rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20rem; //Substituir dps
`;

export const Text = styled.p`
  font-size: 0.8rem;
`;

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;
