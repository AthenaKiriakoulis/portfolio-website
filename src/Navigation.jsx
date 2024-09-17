import React, {useState, useEffect} from 'react';
import './App.css';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import {Route, Link, Routes} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function Navigation() {

  return (
    <div  className='App'>

      <nav className="flex flex-row flex-wrap xl:flex-col z-10 px-10 xl:px-0 justify-center fixed">

      <HashLink smooth to='/portfolio-website/#Home' className="flex relative content-center justify-center">
          <button className="font-inter text-lg md:text-2xl xl:text-2xl text-white  text-center  mt-5 md:px-5 md:mx-10 md:mt-10 xl:mx-20 xl:my-5 xl:p-3 xl:mt-20 before:rounded-lg relative 
                transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full 
                before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black 
                hover:before:left-0 hover:before:w-full">
          <span class="relative z-10">Home</span></button></HashLink>
            {[
            ['About Me', 'AboutMe'],
            ['Experience', 'Experience'],
            ['Projects', 'Projects'],
            ['Contact', 'Contact'],
              ].map(([title, url]) => (
                <HashLink smooth to={"/portfolio-website/#"+(url)} className=" flex relative content-center justify-center ">
                  <button className="font-inter text-lg md:text-2xl xl:text-2xl  text-white text-center mt-5 md:mx-10 md:mt-10 xl:mx-20 xl:my-5 px-3 xl:p-3 before:rounded-lg relative 
                        transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full 
                        before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black 
                        hover:before:left-0 hover:before:w-full" >
                <span class="relative z-10">{title}</span></button></HashLink>
              ))}
        </nav>
    </div>



    
  );
}

export default Navigation;
