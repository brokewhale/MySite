import {
  createGlobalStyle
} from "styled-components"

export const GlobalStyles = createGlobalStyle `
  body,.intro {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .skills__grid, .project{
    background: ${({ theme }) => theme.testbg};



  }

  .icon,.darkmode_icon{
    fill: ${({ theme }) => theme.iconfill};
  }

  .intro,.project,.skills__grid{
    box-shadow: ${({ theme }) => theme.bshadow};


  }

  .project__info-name,.email-link{
    color: ${({ theme }) => theme.septext};
  }

  .skillname,.prof__grid_details-info{
    color: ${({ theme }) => theme.septextblue};

  }
  `