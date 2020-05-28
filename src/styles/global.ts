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

  #root{
    align-items: center;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
