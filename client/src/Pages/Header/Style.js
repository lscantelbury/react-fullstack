import styled from "styled-components";

export const HeaderTitle = styled.header`
  min-height: 2.5rem;
  width: 100vw;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  font-family: 'Sedgwick Ave', cursive;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.color.c1};

  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
  a{
    text-decoration: none;
    color: ${({theme}) => theme.color.c5};
  }
`