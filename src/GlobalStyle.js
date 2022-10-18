import { createGlobalStyle } from "styled-components";
import "./assets/font/fonts.css"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Bowlby One', 'Cafe24Ohsquare';
  text-decoration: none;
  list-style: none;
}
body {
  font-family: 'Bowlby One', 'Cafe24Ohsquare';
  background-color: #989898;
}
button {
  cursor: pointer;
}
`

export default GlobalStyle;