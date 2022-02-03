import styled from "styled-components";

export const Card = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  min-height: 8rem;
  width: 35vw;
  margin: 1rem;
  padding: 1.5rem;
  
  background-color: ${({theme}) => theme.color.c4};
  border-radius: 1rem;
  
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  
  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
  
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
    min-height: 5rem;
    background-color: whitesmoke;
    
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
      color: whitesmoke;
      text-decoration: none;
      &:hover {
        color: ${({theme}) => theme.color.c1};
      }
    }
  }
`