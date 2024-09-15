import { createGlobalStyle } from "styled-components";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default createGlobalStyle`

  :root { 
    --text-color: #434343;
    --primary-color: #ab3897;
    --bg: #f9f9f9;
    --font-family: ${raleway.style.fontFamily}, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  html{
    height:100%;
  }

  body {
    width: 100%;
    height:100%;
    margin: 0;
    color:var(--text-color);
    background: var(--bg);
    font-family: var(--font-family);
  }

#__next{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    height:auto;
    min-height:100vh;
    justify-content: center;
    align-content: space-between;
    
    
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
