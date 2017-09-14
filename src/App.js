import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import AdCreation from './components/AdCreation';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <AdCreation />
  </BrowserRouter>
);

export default App;
