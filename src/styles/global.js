import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: #18191a;
    -wekbit-font-smoothing: antialiased;
    color: #fff;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
