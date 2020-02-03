import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #EDEDED;
  /* font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif; */
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;  
  height: 100%;
  width: 100%;
}
`;

export default GlobalStyle;
