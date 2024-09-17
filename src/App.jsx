import React, {useState, useEffect} from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import './App.css';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Experience from "./Experience.jsx";
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';



function App() {

  return (
    <div  className='App'>
      <div className="flex flex-col xl:flex-row">
          <div className=" bg-slate-950 z-30 h-[15%] fixed w-full  xl:basis-1/5 xl:static  xl:w-auto xl:h-auto ">
            <Navigation />
          </div>

          <div className="basis-4/5 bg-white flex flex-col ">
          <section id="Home" className="scroll-mt-20 xl:scroll-mt-0"> 
            <Home/>
          </section>
          <section id="AboutMe" className="scroll-mt-20 xl:scroll-mt-0"> 
            <AboutMe/>
          </section>
          <section id="Experience" className="scroll-mt-20 xl:scroll-mt-0"> 
            <Experience/>
          </section>
          <section id="Projects" className="scroll-mt-20 xl:scroll-mt-0"> 
            <Projects/>
          </section>
          <section id="Contact" className="scroll-mt-20 xl:scroll-mt-0"> 
            <Contact/>
          </section>
          </div>
      </div>

      </div>



    
  );
}

export default App;
