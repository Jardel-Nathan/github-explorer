import {createGlobalStyle} from "styled-components";
import backgroundImg from "../assets/background.svg";

export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: 0;
}

body{
 background: ${props=> props.theme.colors.background} url(${backgroundImg}) no-repeat 70% top;
 color: ${props=> props.theme.colors.text};
 -webkit-font-anti-aliasing: antialiased;
 
}

body, input, button{
font-family: 'Roboto', serif;
}

h1, h2, h3, h4, h5, h6{
 font-weight: 500;
}

strong{
 font-weight: 800;
}

button{
 cursor: pointer;
}


#root{
 max-width: 960px;
 margin: 0 auto;
 padding: 40px 20px;

}

.errorAlert{
 color: red;
 display: block;
 margin-top: 10px;
}


`;