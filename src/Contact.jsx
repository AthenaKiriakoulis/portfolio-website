import React, { useState, useEffect, createElement } from 'react';
import './App.css';

import react from './assets/React-Symbol.png';
import tailwind from './assets/tailwind-css.svg';
import html from './assets/HTML5-logo.png';
import js from './assets/JavaScript-logo.png';
import css from './assets/CSS3-logo.svg';
import python from './assets/Python-logo.png';
import tkinter from './assets/tkinter-logo.png';
import github from './assets/github-mark.png';
import linkedin from './assets/In-Blue.png';



function Contact() {

  const [dimensions, setDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions([
         window.innerWidth,
         window.innerHeight,
      ]);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const width1 = dimensions[0];
  const height1 = dimensions[1];
  const snowArr = []
  let x = 0;
  let y = 0;
  let speed = 0;

  for(let i=0; i<70; i++){
    x = Math.floor(Math.random()*100);
    y = Math.floor(Math.random() * 10);
    speed = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(15)) + Math.ceil(15));
    snowArr.push({x:x, y:y, speed:speed});
  }



  return (
    <div className='App w-full h-screen'>
      <div className='relative flex-grow h-full bg-gradient-to-b from-[#86a9db] to-[#dcdcf6] flex flex-row overflow-hidden '>
      <div className="snow-container top-0 w-full h-screen hidden lg:block">

        <svg viewBox={"0 0 "+ (width1) + " " + (height1)} preserveAspectRatio="xMinYMin meet" className=" snow fill-[url(#grad3)]" >
          <defs>
              <linearGradient id="grad3" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#F1F8FF" />
                <stop offset="100%" stopColor="#C7E7FE" />
              </linearGradient>
            </defs>
          <path d={"M"+((width1*4)/12)+",600 " +
          "C"+((width1*7)/12)+",400 "+((width1*10)/12)+",400 "+((width1*12)/12)+",600 " +
          "L"+((width1*12)/12)+","+(height1 ) + " L0," + (height1) + " Z"}  className="stroke-blue-200"></path>
        </svg>

        <svg viewBox={"0 0 "+ (width1) + " " + (height1)} preserveAspectRatio="xMinYMin meet" className=" snow fill-[url(#grad3)]" >
          <defs>
              <linearGradient id="grad3" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#F1F8FF" />
                <stop offset="100%" stopColor="#C7E7FE" />
              </linearGradient>
            </defs>
          <path d={"M"+(-((width1*2)/12))+",500 " +
          "C"+0+",300 "+((width1*3)/12)+",300 "+((width1*6)/12)+", "+(height1)+ 
           " L0," + (height1) + " Z"}  className="stroke-blue-200"></path>
        </svg>

      </div>
      
      <div className='absolute w-full'>
      {
        snowArr.map((flake, i) => {
          return <div key={i} className='snowflake' style={{right: `${flake.x}%`, animationDelay:`${flake.y}s`, animationDuration:`${flake.speed}s` }}></div>
        })
      }



      <h1 className='my-20 md:mt-80 lg:m-20 text-6xl text-center lg:text-left md:text-7xl font-bold font-inter text-white'>Contact Me!</h1>
      <div className='flex flex-row content-center md:left-[20%] lg:right-1/3  w-full md:w-3/5 lg:w-2/5 h-auto absolute'>
        <div className='bg-white mx-4 rounded-lg w-1/3'>
        <a href="https://github.com/AthenaKiriakoulis" target="_blank" >
            <img src={github}></img>
        </a>
        </div>


        <div className='bg-white mx-4 rounded-xl w-1/3'>
        <a href="https://www.linkedin.com/in/athena-kiriakoulis/" target="_blank" >
            <img src={linkedin}></img>
        </a>
        </div>

        <div className='bg-white mx-4 rounded-xl w-1/3'>
        <a href="mailto: athena.kiriakoulis@gmail.com" target="_blank" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-15 stroke-black stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </a>
        </div>

      </div>
        </div>
      </div>



    </div>







  );
}

export default Contact;
