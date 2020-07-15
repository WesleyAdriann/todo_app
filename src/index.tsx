import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './style';

import App from './pages/app';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
