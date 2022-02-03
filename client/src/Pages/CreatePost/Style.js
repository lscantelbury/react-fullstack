import styled from "styled-components";

const cardH = 8; //rem
const cardW = 35; //vw
export const CreatePostCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  min-height: ${(cardH * 2).toString()}rem ;
  width: ${(cardW * 1.1).toString()}vw;
  padding: 1.5rem;

  background-color: ${({theme}) => theme.color.c4};
  border-radius: 1rem;

  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
  
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%); 
  
  display: flex;
  justify-content: center;
  * {
    margin: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  .title {
    width: 50%;

    background-color: ${({theme}) => theme.color.c2};

    align-self: flex-start;

    &:hover {
      background-color: ${({theme}) => theme.color.c3};
    }
  }
    .text {
      background-color: whitesmoke;
      flex-grow: 1;

      &:hover {
        background-color: white;
        cursor: pointer;
      }
    }
      .username {
        width: 25%;
        align-self: flex-end;
        margin-bottom: 0;
        padding-bottom: 0;

        font-family: 'Architects Daughter', cursive;
      }
`