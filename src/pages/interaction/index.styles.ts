import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 5rem;
  gap: 5rem;

`;

export const Book = styled.img`
  max-width: 22rem;
  max-height: 30rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const SubText = styled.p`
  font-size: .8rem;
  max-width: 20rem;

`;


export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

export const Crud = styled.button`
  height: 2.7rem;
  font-weight: bold;
  background-color: #FF9E40; 
  border: 2px solid #FF9E40;
  color: #000;
  font-size: .9rem;
  transition: background-color 0.8s ease, color 0.8s ease, border-color 0.8s ease;

  &:hover {
    background-color: black; 
    color: #FF9E40; 
    border-color: black; 
  }
`;