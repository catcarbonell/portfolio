import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import './styles/DarkModeApp.scss';

function App() {
  return (
    <Router>
      <div className=" center-container">
        <div className="center-content both">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
