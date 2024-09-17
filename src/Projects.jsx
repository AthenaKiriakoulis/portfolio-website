import React, { useState, useEffect } from 'react';
import './App.css';

import react from './assets/React-Symbol.png';
import tailwind from './assets/tailwind-css.svg';
import html from './assets/HTML5-logo.png';
import js from './assets/JavaScript-logo.png';
import css from './assets/CSS3-logo.svg';
import python from './assets/Python-logo.png';
import tkinter from './assets/tkinter-logo.png'



function Projects() {

  const [project, setProject] = useState([]);

  const projects = [
    {title:"This Website", desc: "This portfolio website was built using React, Javascript, HTML, CSS, Vite, and Tailwind",
     link: "https://github.com/AthenaKiriakoulis/portfolio-website" },

    {title:"Bounty Board Task-Tracker", desc: "A map-based task-organization application built for a another project team I led.",
    link:"https://github.com/AthenaKiriakoulis/OR83-Bounty-Board"}, 

    {title:"Spelling Bee Clone",desc: "A clone of the NYT Game Spelling Bee",
    link:"https://github.com/AthenaKiriakoulis/SpellingBeeClonePython" } 

  ]


  const skills = [
    [{title: react, scale: "25%"},{title: tailwind, scale: "33%"},{title: html, scale: "25%"},{title: js, scale: "25%"},{title: css, scale: "20%"}],
    [{title: react, scale: "25%"},{title: html, scale: "25%"},{title: js, scale: "25%"},{title: css, scale: "20%"}],
    [{title: python, scale: "70%"},{title: tkinter, scale: "50%"}]


  ]

  const length = 3;
  const showInfo = (index) => {
      setProject(skills[index])

  };




  return (
    <div className='App w-full h-screen'>
      <div className='relative flex-grow h-full bg-gradient-to-t from-[#fad5aa] to-[#fef4eb] flex flex-col md:flex-row overflow-hidden'>
      <div className='absolute w-full'>
          <div className='leaf absolute z-0 -top-48 right-[60%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(227, 136, 25)', '--leaf-color2': 'rgb(216, 124, 19)', '--leaf-rotate': '90%', '--leaf-speed':'10s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[40%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(123, 130, 57)', '--leaf-color2': 'rgb(97, 102, 43)', '--leaf-rotate': '100%', '--leaf-speed':'7s', '--leaf-delay':'0s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[20%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(194, 50, 42)', '--leaf-color2': 'rgb(158, 39, 33)', '--leaf-rotate': '45%', '--leaf-speed':'15s', '--leaf-delay':'1s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[30%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(239, 189, 35)', '--leaf-color2': 'rgb(209, 164, 31)', '--leaf-rotate': '105%', '--leaf-speed':'12s', '--leaf-delay':'2s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[35%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(227, 136, 25)', '--leaf-color2': 'rgb(216, 124, 19)', '--leaf-rotate': '60%', '--leaf-speed':'10s' , '--leaf-delay':'0s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[10%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(123, 130, 57)', '--leaf-color2': 'rgb(97, 102, 43)', '--leaf-rotate': '90%', '--leaf-speed':'17s' , '--leaf-delay':'1s'}}>
            </div>

            <div className='leaf absolute z-0 -top-48 right-[75%]' 
            style={{'--leaf-width': '50px', '--leaf-height': '50px', '--leaf-color': 'rgb(194, 50, 42)', '--leaf-color2': 'rgb(158, 39, 33)', '--leaf-rotate': '0%', '--leaf-speed':'8s' , '--leaf-delay':'2s'}}>
            </div>
        </div>

        <div className=' w-full md:w-3/5 h-4/5 flex flex-wrap' >


          <div className='mx-3 md:mx-8 mt-8 my-4 h-1/3 w-full md:w-4/5 bg-[#f58959] z-20 opacity-90 border-4 border-amber-700 rounded-xl' onClick={() => showInfo(0)} >
          <h1 className='mt-3 md:mt-6 mx-8 text-2xl md:text-3xl font-bold font-rubik text-white border-b border-amber-700 opacity-100'>{projects[0].title}</h1>
            <p className='mx-8 text-lg md:text-xl font-nunito mt-5 text-white text-left'>{projects[0].desc}</p>
            <a className='mx-8 text-xl w-1/3 font-nunito mt-5 text-indigo-100 text-left block' 
              href={projects[0].link}> Github Link</a>
  
          </div>
          <div className='mx-3 md:mx-8 my-4 h-1/3 w-full md:w-4/5 bg-[#f58959] z-20 opacity-90 border-4 border-amber-700 rounded-xl' onClick={() => showInfo(1)}>
            <h1 className='mt-3 md:mt-6 mx-8 text-xl md:text-3xl font-bold font-rubik text-white border-b border-amber-700 opacity-100'>{projects[1].title}</h1>
              <p className='mx-8 text-lg md:text-xl font-nunito mt-5 text-white text-left'>{projects[1].desc}</p>
              <a className='mx-8 text-xl w-1/3 font-nunito mt-5 text-indigo-100 text-left block' 
              href={projects[1].link}> Github Link</a>
          </div>

          <div className='mx-3 md:mx-8 my-4 h-1/3 w-full md:w-4/5 bg-[#f58959] z-20 opacity-90 border-4 border-amber-700 rounded-xl' onClick={() => showInfo(2)}>
            <h1 className='mt-3 md:mt-6 mx-8 text-2xl md:text-3xl font-bold font-rubik text-white border-b border-amber-700 opacity-100'>{projects[2].title}</h1>
              <p className='mx-8 text-lg md:text-xl font-nunito mt-5 text-white text-left'>{projects[2].desc}</p>
              <a className='mx-8 text-xl w-1/3 font-nunito mt-5 text-indigo-100 text-left block' 
              href={projects[2].link}> Github Link</a>
          </div>
          
        </div>

        <div className='m-8 relative box-border w-2/5 flex flex-col bg-orange-700 z-20 opacity-90 border-2 border-amber-700 rounded-xl hidden md:block'>
            <h1 className='mt-8 mx-8 text-4xl relative font-bold font-rubik text-white border-b border-amber-700 opacity-100'>Skills</h1>
            <div className='flex flex-wrap items-start gap-x-2 gap-y-2'>
            {project.map((skill, i) => (
              <img key={i} src={skill.title}  style={{ width: skill.scale }} className={` mx-4 my-4 h-auto relative max-h-full object-contain`}></img>
            ))}
            </div>



        </div>
      </div>


          {/*
            <div className=' w-3/5 h-full flex flex-col'>
          <div className='m-8 h-1/3 bg-[#3354FF] opacity-50 border-2 border-indigo-700 rounded-xl flex flex-col'>
            <h1 className='mt-8 mx-8 text-4xl font-bold font-rubik text-indigo-100 border-b border-indigo-950'>This Website</h1>
            <p className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left'>This portfolio website was built using
            React, Javascript, HTML, CSS, Vite, and Tailwind</p>
            <button className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left' 
            href='https://github.com/AthenaKiriakoulis/OR83-Bounty-Board'> Github Link</button>

          </div>
          <div className='m-8 shrink  h-1/3 bg-[#3354FF] opacity-50 border-2 border-indigo-700 rounded-xl'>
            <h1 className='mt-8 mx-8 text-4xl font-bold font-rubik text-indigo-100 border-b border-indigo-950'>Bounty Board Task-Tracker</h1>
              <p className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left'>A map-based task-organization application
              built for a another project team I led. Uses React, Javascript, HTML, CSS, Vite, and Firebase</p>
              <button className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left' 
            href='https://github.com/AthenaKiriakoulis/OR83-Bounty-Board'> Github Link</button>
            </div>

          <div className='m-8 shrink h-1/3 bg-[#3354FF] opacity-50 border-2 border-indigo-700 rounded-xl'>
            <h1 className='mt-8 mx-8 text-4xl font-bold font-rubik text-indigo-100 border-b border-indigo-950'>Bounty Board Task-Tracker</h1>
                <p className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left'>A map-based task-organization application
                built for a another project team I led. Uses React, Javascript, HTML, CSS, Vite, and Firebase</p>
                <button className='mx-8 text-2xl font-nunito mt-5 text-indigo-100 text-left' 
              href='https://github.com/AthenaKiriakoulis/OR83-Bounty-Board'> Github Link</button>
          </div>
  */}

    </div>







  );
}

export default Projects;
