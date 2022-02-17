import 'styled-components';

declare module 'styled-components' {

 export interface DefaultTheme {
  title: string;
  colors: {
   background: string;
   text: string;
  }
  itens:{
   background: string,
   text: string,
  },

  input:{
   background: string,
   text: string,
  }

 }

}