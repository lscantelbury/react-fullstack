import styled from "styled-components";

export const CreatePostCard = styled.div`
  min-height: 50vh;   
  width: 50vw;
  
  background-color: aquamarine;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%); 
  
  display: flex;
  justify-content: center;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 0.5rem;
    
  }
`