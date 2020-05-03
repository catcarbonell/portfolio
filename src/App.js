import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import './styles/DarkModeApp.scss';

function App() {
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className="center-container">
          <Routes />
      </div>
    </BrowserRouter>
  );
}
library.add(fab, fas);
export default App;
