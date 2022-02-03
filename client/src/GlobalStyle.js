import { createGlobalStyle } from "styled-components";

export const theme = {
    color: {
        c1: "#def2c8",
        c2: "#c5dac1",
        c3: "#bcd0c7",
        c4: "#a9b2ac",
        c5: "#898980",
    }
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=Open+Sans:wght@300;400;700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.color.grey};
    
    display: flex;
    
    align-items: center;
    justify-content: center;
    
  }

  footer {
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 0;
  }
`
