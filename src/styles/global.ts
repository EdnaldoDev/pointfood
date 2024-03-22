import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    padding: 0px;
    margin: 0px; 
    
    box-sizing:content-box;
   }
  html, body, #root{
    min-height: 100%;
    /* overflow-y:hidden; */
  }

  body {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
    margin: 0px;
  }

  button,textarea,input,select,body{
    font:400 1rem 'Roboto', Helvetiva,Arial, sans-serif;
  }

  a{
    color:inherit;
    text-decoration:none;
  }


  button{
    cursor:pointer;
  }

  ul,li{
    list-style:none;
    padding:0px;
  }
`
