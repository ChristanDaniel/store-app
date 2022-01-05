import { createGlobalStyle } from 'styled-components'
import { pageContainer } from "../src/features/styles";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    all: unset
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html {
    ${pageContainer}

    @media (max-width: 1080px) {
      font-size: 93,75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87,5%; //14px
    }

  }

  body {
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`