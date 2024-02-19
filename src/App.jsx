import {useState} from 'react';
import './App.css';
import About from './About.jsx';
import AppHeader from './AppHeader.jsx';
import background from './assets/jonathan-roger-unsplash.jpg';


function App() {
  return (
    <div className='App'>
      <div className='Header-container'>
        <header className="App-header">
            <p>Hewwo</p>
        </header>
      </div>
      <div>
      <img src={background} className='Background-image' alt='Background image of NYC' />
      </div>
     <div>
      <About />
      </div>
      </div>


    
  );
}

export default App;
