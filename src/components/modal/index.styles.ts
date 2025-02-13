import styled from "styled-components";

export const ModalContent = styled.div`
  background: #fff;
  padding: 1.3rem;
  text-align: center;
  border: 1px solid #000;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.4rem;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin: .8rem 0 .5rem;
  font-size: .9rem; 
`;

export const Input = styled.input`
  width: 100%;
  padding: .8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: .7rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: .8rem;
`;

export const Button = styled.button<{ $secondary?: boolean }>`
  width: 100%;
  padding: .8rem;
  margin-top: .8rem;
  border: none;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #000;
    border: .1px solid #000;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
