import styled from "styled-components";

const cardH = 8; //rem
const cardW = 35; //vw

export const Card = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  min-height: ${cardH.toString()}rem ;
  width: ${cardW.toString()}vw;
  margin: 1rem;
  padding: 1.5rem;
  
  background-color: ${({theme}) => theme.color.c4};
  border-radius: 1rem;
  
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  
  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
  
  cursor: zoom-in;
  
  resize: horizontal;
  overflow: auto;
  
  &:active {
    transform: scale(1.3);
  }
  
  * {
    margin: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
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
    min-height: auto;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
  
  .username {
    align-self: flex-end;
    margin-bottom: 0;
    padding-bottom: 0;
    
    font-family: 'Architects Daughter', cursive;

    a {
      text-decoration: none;
      color: black;
    }
  }
`
export const ExpandedCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  min-height: ${(cardH*4).toString()}rem ;
  width: ${(cardW*2).toString()}vw;
  padding: 1.5rem;
  padding-top: 0.5rem;
  
  background-color: ${({theme}) => theme.color.c4};
  border-radius: 1rem;
  
  display: flex;
  flex-flow: column wrap;
  
  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
  
  resize: horizontal;
  overflow: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  
  *:not(.title) {
    margin: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  .title {
    width: 50%;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.color.c2};
    
    margin: 0.5rem;
    display: flex;
    justify-content: center;
    align-self: center;
    
    font-size: 2rem;
    font-family: 'Architects Daughter', cursive;
    &:hover {
      background-color: ${({theme}) => theme.color.c3};
    }
  }
  
  .text {
    flex-grow: 1;
    background-color: whitesmoke;
    min-height: auto;
    &:hover {
      background-color: white;
    }
  }
  
  .username {
    align-self: flex-end;
    margin-bottom: 0;
    padding-bottom: 0;
    
    font-family: 'Architects Daughter', cursive;

    a {
      text-decoration: none;
      color: black;
    }
  }
`
