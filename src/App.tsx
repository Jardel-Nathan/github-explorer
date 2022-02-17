import React from 'react';
import { RoutesApp } from './routes';
import { GlobalStyle } from './style/globalStyle';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Light } from './style/themes/light';
import { Night } from './style/themes/night';
import { createContext, useState } from 'react'; 

// interface para defifinir tipo do contexto
interface ThemeContext {
  theme: DefaultTheme;
  switchTheme(): void;
}

// criando o contexto para o estado do tema e a função para mudar o tema  (light/night) 
export const ContextTeste = createContext<ThemeContext>({}as ThemeContext); 

function App() {

  const initialTheme = localStorage.getItem('theme') || 'light'; // pegando o tema do localStorage ou se não existir o tema padrão é light

  const [theme, setTheme] = useState((initialTheme === 'night')?Night:Light); // setando o tema inicial do localStorage ou se não existir o tema padrão é light
 
  const switchTheme = () => {// função para mudar o tema
    setTheme(theme === Light ? Night : Light); // trocando o tema

    localStorage.setItem('theme', theme === Night ? 'light' : 'night' ); // salvando o tema no localStorage

  };

  return  (
      <>
        <ContextTeste.Provider value={{ theme, switchTheme }} >  {/*passando o contexto para o componente*/ }
        <ThemeProvider theme={theme}> {/* passando o tema para o componente */}
        <GlobalStyle />
        <RoutesApp></RoutesApp>
        </ThemeProvider>
        </ContextTeste.Provider>
      
      </>
    )
}

export default App;
