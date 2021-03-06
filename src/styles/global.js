import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(-0deg, #170d29, #1D1946);
    color: #FFF;
    overflow: hidden;
  }

  body, input, button {
    font-family: 'Roboto Slab';
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;