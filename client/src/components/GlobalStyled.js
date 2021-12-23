import {createGlobalStyle} from "styled-components";



const GlobalStyle = createGlobalStyle`
 html{
    @media(max-width: 1700px){
         font-size: 80%;
     }
  }
  body{
      font-family: "Roboto", sans-serif;
      font-weight: 500;
  }
  *{
      margin: 0;
      padding: 0;
  }

`





export default GlobalStyle;