import React, {useState, useEffect} from 'react';
import './App.css';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import cloud_1 from './assets/cloud-3.png';
import cloud_1_pink from './assets/cloud-3-pink.png';
import cloud_2 from './assets/cloud-2.png';
import cloud_3 from './assets/cloud-1.png';
import cloud_1_purple from './assets/cloud-1-purple.png'



function Home() {

  

  {
    /*
    Cloud PNGs by Vecteezy
    */
  }
  
  return (
    <div  className='App w-full h-[100vh] lg:h-screen lg:pt-0'>
    <div className='relative flex-grow h-full'>

        <div className='box flex-grow relative'>
          <div className="flex flex-col h-full ">
            <div className="font-inter z-10 text-4xl md:text-5xl text-black inset-x-1/3 mx-10 lg:mx-48 my-3 mt-80">Hi, I'm</div>
            <div className="font-megrim z-10 text-6xl md:text-9xl text-black inset-x-1/2 mx-10 lg:mx-48 my-3">Athena <></>Kiriakoulis</div>
            <img src={cloud_1} className='floating absolute mx-24 inset-x-2/3 mt-36 size-2/12 object-cover opacity-30 z-0 hidden lg:block'/>
            <img src={cloud_1} className='floating2 absolute inset-y-2/3 inset-0 size-3/12 object-cover opacity-30 z-0 hidden lg:block'/>
            
            <img src={cloud_2} className='floating2 absolute inset-x-full inset-y-2/4 inset-0 size-2/12 object-cover opacity-30 z-0 hidden lg:block'/>
            <img src={cloud_3} className='floating4 absolute inset-x-full inset-y-1/2 inset-0 size-2/12 object-cover opacity-30 z-0 hidden lg:block'/>
            <img src={cloud_2} className='floating3 absolute inset-x-full inset-y-3/4 inset-0 size-2/12 object-cover opacity-30 z-0 hidden lg:block'/>
            {/*
              <img src={cloud_1_pink} className='floating3 absolute inset-x-full inset-y-1/4 inset-0 size-3/12 object-cover opacity-35 z-0'/>
            <img src={cloud_1_purple} className='floating absolute inset-x-full inset-0 size-3/12 object-cover opacity-30 z-0'/>
  */}
          </div>
          </div>


      </div>
    </div>




    
  );
}

export default Home;
