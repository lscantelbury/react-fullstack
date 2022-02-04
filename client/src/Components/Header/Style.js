import styled from "styled-components";

export const HeaderTitle = styled.header`
  min-height: 2.5rem;
  width: 100vw;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Sedgwick Ave', cursive;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.color.c1};

  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
 
  span{
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    font-size: 1rem;
  }
  a{
    text-decoration: none;
    color: ${({theme}) => theme.color.c5};
  }
`