import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing: border-box;
  }

  :root{
    --color-orange: #FFA319;
    --color-light-orange: #FFAD33;
    --color-blue: #0066B3;
    --color-light-blue: #199CFF;
    --color-font-light: #e1e1e1;
    --color-font-dark: #1e1e1e;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100vh;
    background-color: var(--color-orange);
  }

  #app{
    display: grid;
    grid-template-rows: 15% auto 10%;
    height: 100%;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
export default GlobalStyles
