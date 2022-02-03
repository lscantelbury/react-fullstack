import styled from "styled-components";

export const HeaderTitle = styled.header`
  height: 2.5rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  font-family: 'Sedgwick Ave', cursive;
  margin-bottom: 1rem;
  
  a{
    text-decoration: none;
    color: ${({theme}) => theme.color.c5};
  }
`