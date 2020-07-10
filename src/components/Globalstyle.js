import {
  createGlobalStyle
} from "styled-components"

export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .intro,.skills__grid{
    background: ${({ theme }) => theme.testbg};



  }

  .darkmode_icon{
    fill: ${({ theme }) => theme.iconfill};
  }
  `