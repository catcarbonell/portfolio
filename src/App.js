import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import './styles/DarkModeApp.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className=" center-container">
          <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
