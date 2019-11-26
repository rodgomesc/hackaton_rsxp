import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300i,400i,500i&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    }
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #F7F7F7;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border:0;
  }
`;

export default GlobalStyle;
