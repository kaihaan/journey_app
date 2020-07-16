import { createGlobalStyle } from 'styled-components';
// import px2vw from "../utils/px2vw";

// calculated responsive (complements static defs in global.css)
// and from theme vars
export const GlobalStyles = createGlobalStyle`

body {
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
}

a {
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
}


.button.button-link, button.button-link {
    border: 0px; 
    color: ${({ theme }) => theme.linkColor};
    text-transform: none;
  
    &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
}

.activeLink {
  color: ${({ theme }) => theme.primaryHover}
}

/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button, button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box; }
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  border-color: ${({ theme }) => theme.primaryHover};
  outline: 0; }
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: #FFF;
  background-color: ${({ theme }) => theme.hero};
  border-color: transparent; }
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: #FFF;
  background-color: #1EAEDB;
  border-color: #1EAEDB; }

`