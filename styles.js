import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  img{
    display: block;
    object-fit: cover;
  }

  a{
    text-decoration: none;
    color:inherit;
  }

  ul,ol,menu{
    list-style: none;
  }
`;
