import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdCreation from './components/AdCreation';

const App = () => (
  <BrowserRouter>
    <AdCreation />
  </BrowserRouter>
);

export default App;
