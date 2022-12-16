import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppStyled } from './components/App/App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStyled />
    <GlobalStyle />
  </React.StrictMode>
);
