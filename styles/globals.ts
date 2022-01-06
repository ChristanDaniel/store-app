import { createGlobalStyle } from 'styled-components'
import { pageContainer } from '../src/features/styles'

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
  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-close {
    padding-left: 450px;
    position: absolute;
    left: 134px;
    top: 16px;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .react-modal-content {
    width: 100%;
    max-width: 650px;
    background: #eee;

    padding: 50px 50px 20px 50px;
    position: relative;

    border-radius: 0.24rem;
  }

`
