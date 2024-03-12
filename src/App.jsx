import React, {useState, useEffect} from 'react';
import './App.css';
import About from './About.jsx';
import AppHeader from './AppHeader.jsx';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx'



function App() {
  const [windowPosition, setWindowPosition] = useState(undefined);
  const [TopS, setTopS] = useState(0);

  //makes scroll go to top when page reloads
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


  //measures scroll position of header
  useEffect(() => {
    console.log('useEffect has been called');

    function windowScrolly() {
      const position = window.scrollY;
      setWindowPosition(position);
      window.addEventListener("scroll", windowScrolly);
       return () => window.removeEventListener("scroll", windowScrolly);
    }

    windowScrolly();
  }, [TopS]);
  return (
    <div  className='App'>
      <div id="Home">
      </div>
      <div  className='Header-container'>
        <header className="App-header">
            <a href="#Home" className="Inner-header">Home</a>
            <a href="#About-container" className="Inner-header">About</a>
            <a href="#Edu-container" className="Inner-header">Education</a>
            <a href="#Home" className="Inner-header">Experience</a>
            <a href="#Home" className="Inner-header">Projects</a>
            <a href="#Home" className="Inner-header">Contact</a>
        </header>
      </div>
      <div>
        
      <img src={background} className='Background-image' alt='Background image of NYC' />
      <p className="Title-1">Hi, I'm</p>
      <p className="Title-2">Athena Kiriakoulis</p>
      </div>
      <div className='squares'>
        <div className='square1'></div>
        <div className='square2'></div>
        <div className='square3'></div>
        <div className='square4'></div>
        <div className='square5'></div>
        <div className='square6'></div>
        <div className='square7'></div>
        <div className='square8'></div>
        <div className='square9'></div>
        <div className='square10'></div>
        <div className='square11'></div>
        <div className='square12'></div>
        <div className='square13'></div>
        <div className='square14'></div>
        <div className='square15'></div>
        <div className='square16'></div>
        <div className='square17'></div>
        <div className='square18'></div>
      </div>
      <div id="About-container" className="About-container"> 
      <About />
      </div>
      <div id="Edu-container" className="Edu-container"> 
      <Education />
      </div>
      <div id="Exp-container" className="Exp-container"> 
      <Experience />
      </div>
      <div id="Projects-Container" className="Projects-Container"> 
      <Projects />
      </div>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>

      </div>



    
  );
}

export default App;
