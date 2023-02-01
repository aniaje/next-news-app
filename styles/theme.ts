import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  background: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    scroll-behavior: smooth;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }


  a {
    text-decoration:none;
  }

  h1,h2,h3,h4,h5,h6 {
 margin:0;

  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  `;
