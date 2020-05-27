import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { /* coloca o estilo em todos os componentes */
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1A1A1A; /* cor do fundo */
    -webkit-font-smoothing: antialiased; /* detalha a fonte para o chrome */
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1330px;
    margin: 0 auto;
    padding: 30px 0;
  }

  button {
    cursor: pointer;
  }
`;
