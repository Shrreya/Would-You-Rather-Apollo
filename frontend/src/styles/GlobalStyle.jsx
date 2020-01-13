import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --navbar-height: 60px;
    --navbar-checkbox: 60px;
    --navbar-text: 148.44px;
    --footer-height: 60px;
    --footerParagraph-text: 47px;
    --borderRadius-1: 5px;
    --primaryColor: #6e3ac2;
    --mainWhite: #fff;
    --offWhite: #f7f7f7;
    --Black-1: #000;
    --mainBlack: #333;
    --textColor: #363636;
    --boxShadow-1: 0px 2px 4px rgba(0, 0, 0, 0.1);
    --boxShadow-2: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    --boxShadow-3: 4px 2px 8px 0px rgba(0, 0, 0, 0.2);
    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body:not(ul) {
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-family: 'Nunito Sans', sans-serif;
    font-size: calc(0.7rem + 1vmin);
    color: var(--textColor);
    word-break: break-word;
    text-rendering: optimizeLegibility;
  }
`

export default GlobalStyle
