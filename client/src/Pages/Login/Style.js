import styled from "styled-components";

const cardH = 8; //rem
const cardW = 35; //vw
export const LoginCard = styled.div`
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
  flex-direction: column;
  justify-content: space-evenly;
  * {
    margin: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  
  h1:first-child {
    margin: 0;
    padding: 0;
    font-family: 'Architects Daughter', cursive;
  }
  form{
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem;
    
    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      align-self: center;
      width: 100%;
    }
  }
  
  label {
    font-size: 0.8rem;
    color: red;
    margin: 0;
  }
`
