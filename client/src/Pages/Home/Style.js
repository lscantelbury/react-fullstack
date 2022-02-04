import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    .createPost {
      width: 5rem;
      height: 3rem;
      margin-left: 1rem;
      border-radius: 0.5rem;
      align-self: center;

      &:hover{
        background-color: ${({theme}) => theme.color.c2};
      }
    }
`