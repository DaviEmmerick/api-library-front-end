import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: white;
  align-content: center;
  max-width: 50rem;

`;

export const Style = styled.p`
  color: #FF9E40;
`;

export const SubTitles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
`;


export const ChangeLanguage = styled.p`
  display: flex;
  justify-content: flex-end;
  color: white;
  padding-right: 6rem;
  transform: translateY(-2.4rem);
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

export const Tag = styled.div`
  font-size: 1.1rem;
  margin-top: .4rem;
  margin-left: 8rem;
  line-height: 1.5rem;

`;

export const Title = styled.p`

`;