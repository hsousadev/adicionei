import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

interface GlobalStylesProps {
  isDarkTheme: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  :root {
    --Max-content-width: 1240px;

    --RaisinBlack: #252233;
    --SpaceCadet: #332E4B;
    --TropicalIndigo: #9996FD;
    --Periwinkie: #D4D1FE;
    --FrenchGray: #ADACB4;
    --GhostWhite: #F9F9FD;
    --Bittersweet: #FF6868;
    --ScreaminGreen: #68FF77;
    --White: #fff;

    --Font-color: var(--FrenchGray);
  }

  ${(props) =>
    props.isDarkTheme
      ? css`
          :root {
            --BackgroundColor: var(--RaisinBlack);
          }
        `
      : css`
          :root {
            --BackgroundColor: var(--White);
          }
        `}

  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
    background-color: var(--BackgroundColor);

  }

  @media(max-width: 1320px) {
    body {
      padding: 0 32px; 
    }
  }

  @media(max-width: 425px) {
    body {
      padding: 0 16px;
    }
  }

  mark {
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }


  h1, h2, h3, h4, p {
    transition: all 0.4s ease-in-out;

    margin: 0;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    color: var(--Font-color);
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
  }

  input {
    appearance: none;
    outline: none;
    border: none;
    font-family: "Poppins";
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--TropicalIndigo);
    border-radius: 16px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(123, 74, 226, 0.3);
  }


  @media(max-width: 720px) {
    h1 {
    font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
  
`;
