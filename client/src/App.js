import React from 'react';
import logo from './logo.svg';
import './App.css';

import SoccerData from './components/SoccerData'

import {useDarkMode} from './hooks/useDarkMode'




function App() {

  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };



  return (
    
    <div className="App">
      <button onClick={toggleMode}>Dark Mode</button>
      <SoccerData/>
    </div>
  );
}

export default App;
