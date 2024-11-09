import React from 'react';
import Login from '../components/login';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import GoogleFormBuilder from './GoogleFormBuilder';

const App = () => {
  return (
    <>
    <div className="App">
      <GoogleFormBuilder />
    </div>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </>
  );
};

export default App;
