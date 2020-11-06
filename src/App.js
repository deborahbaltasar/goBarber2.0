import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Routes from './routes';

import {AuthProvider} from './context/AuthContext';

function App() {
  
  
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyle />
    </>
    
  );
}

export default App;
