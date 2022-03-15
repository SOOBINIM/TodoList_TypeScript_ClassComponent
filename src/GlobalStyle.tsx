import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;    
  }
  body{
    font-family: 'Dongle', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
  }

  button {
    
  }

`;

export default GlobalStyle;
