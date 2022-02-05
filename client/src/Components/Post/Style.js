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
  
  display: flex;
  padding: 1rem;
  
  align-items: center;
  justify-content: space-between;
  
  * {
    margin: 1rem;
  }
  
.card {
  flex-grow: 3;

  min-height: ${(cardH*4).toString()}rem ;
  width: ${(cardW*2).toString()}vw;

  background-color: ${({theme}) => theme.color.c4};
  border-radius: 1rem;

  display: flex;
  flex-flow: column wrap;

  box-shadow: 0 0 1em ${({theme}) => theme.color.c1};

  overflow: auto;

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
}
  .comments {
    min-height:  ${(cardH*4).toString()}rem ;
    border-radius: 1rem;
    margin: 0;
    padding: 0;
    
    background-color: ${({theme}) => theme.color.c4};
    box-shadow: 0 0 1em ${({theme}) => theme.color.c1};
    display: flex;
    flex-flow: column wrap;
    flex-grow: 2;
    
    justify-content: space-between;
    * {
      margin: 0.5rem;
    }
    
    .title {
      font-size: 2rem;
      font-family: 'Architects Daughter', cursive;
      
      margin: 0;
    }
    
    .listOfComments {
      flex-grow: 1;
      background-color: ${({theme}) => theme.color.c5};
      border: 2px solid ${({theme}) => theme.color.c2};
      border-radius: 0.5rem;
      align-self: stretch;
    }
    .comment {
      min-height: 1.5rem;
      background-color: whitesmoke;
      border-radius: 0.25rem;
      
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.25rem;
      
      label {
        font-size: 0.5rem;
        color: cornflowerblue;
        align-self: flex-end;
      }
    }
    
    .input {
      display: flex;
      height: 3rem;
      justify-content: center;
      * {
        margin: 0;
        padding: 0;
        border: 0;
      }
      
      textarea {
        background-color: whitesmoke;
        border-radius: 0.5rem 0 0 0.5rem;
        
        padding: 0.5rem;
        
        overflow: scroll;
        resize: none;
        
        &::placeholder {
          position: relative;
          top: 1rem;
          left: 0.5rem;
        }
      }
      
      button {
        background-color: ${({theme}) => theme.color.c2};
        border-radius: 0 0.5rem 0.5rem 0;
        padding: 0.5rem;
        
        &:hover {
          background-color: ${({theme}) => theme.color.c1};
        }
      }
    }
  }
`
