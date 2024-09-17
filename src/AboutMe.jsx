import React, {useState, useEffect} from 'react';
import './App.css';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function AboutMe() {

  const[staticVisible, setStaticVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
          setStaticVisible(false);
        }, 700);
      return () => clearTimeout(timer);
  }, []);

  const height = (window.innerHeight);
  const width = (window.innerWidth);


  
 
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
   console.log("prev: " + index);
  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    console.log("next: " + index);
  };



  return (
    <div  className='App w-full h-[100vh] lg:h-screen '>
    <div className='relative z-0 h-full w-full content-center bg-cyan-100'>
    <div className="wave-container top-0">
  <svg viewBox={"0 0 "+ (width) + " " + (height - 100)} preserveAspectRatio="xMinYMin meet" className="wave fill-[url(#grad1)]" >
    <defs>
        <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#4AE2EF" />
          <stop offset="100%" stop-color="#00B7D6" />
        </linearGradient>
      </defs>
    <path d={"M0,"+(height/12) +
    "C"+(width/12)+","+(height/12)+" "+((width*2)/12)+",0 "+((width*3)/12)+","+(height/12)+" " + 
    "C"+((width*4)/12)+","+(height/12)+" "+((width*5)/12)+",0 "+((width*6)/12)+","+(height/12)+" " +  
    "C"+((width*7)/12)+","+(height/12)+" "+((width*8)/12)+",0 "+((width*9)/12)+","+(height/12)+" " +
    "C"+((width*10)/12)+","+(height/12)+" "+((width*11)/12)+",0 "+((width*12)/12)+","+(height/12)+" " +  
    "L"+((width*12)/12)+","+(height - 100) + " L0," + (height - 100) + " Z"} className="stroke-none"></path>



  </svg>
  <svg viewBox={"0 0 "+ (width) + " " + (height - 100)} preserveAspectRatio="xMinYMin meet"  className="wave2 fill-[url(#grad1)]" >
    <defs>
      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#96F3FA" />
        <stop offset="100%" stop-color="#00B7D6" />
      </linearGradient>
    </defs>
    <path d={"M0"+","+(height/12)+" " +
    "C"+(width/12)+","+(height/12)+" "+((width*2)/12)+",0 "+((width*3)/12)+","+(height/12)+" " + 
    "C"+((width*4)/12)+","+(height/12)+" "+((width*5)/12)+",0 "+((width*6)/12)+","+(height/12)+" " +  
    "C"+((width*7)/12)+","+(height/12)+" "+((width*8)/12)+",0 "+((width*9)/12)+","+(height/12)+" " +
    "C"+((width*10)/12)+","+(height/12)+" "+((width*11)/12)+",0 "+((width*12)/12)+","+(height/12)+" " +  
    "L"+((width*12)/12)+","+(height - 100) + " L0," + (height - 100) + " Z"} className="stroke-none"></path>

  </svg>
  <div className='absolute inset-0 flex items-center justify-center z-10'>
  <div className='flex flex-row overflow-hidden bg-opacity-80 rounded-lg border-4 border-cyan-500 shadow-lg w-11/12 p-4 md:w-6/12 lg:w-6/12 lg:h-auto lg:p-6  '>

    <button onClick={handlePrevious} className="ml-[0%] lg:ml-3 z-20 absolute lg:static">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>

    <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(index * 118)}%)` }}>

    <div className='shrink-0 w-8/12 ml-[5%] md:ml-[15%] lg:w-full lg:ml-[4%] lg:mr-[10%] '>
          <h1 className="text-3xl font-bold font-nunito text-center text-black">About Me</h1>
          <p className='text-lg lg:text-2xl font-nunito text-center mt-5 text-black'>I am a software developer, recently graduated from Stevens Institute of Technology in May 2024 with a Bachelors in Computer Science.</p>
          </div>
    <div className='shrink-0 w-8/12 ml-[50%] lg:w-full lg:ml-[10%] lg:mr-[10%]' >
          <h1 className="text-3xl font-bold font-nunito text-center text-black">Education</h1>
          <p className='text-lg lg:text-2xl font-nunito text-center mt-5 text-black'>Stevens Institute of Technology - Class of 2024 </p>
          <p className='text-lg lg:text-2xl font-nunito text-center mt-5 text-black'>Bachelors in Computer Science</p>
          </div>
    <div className='shrink-0 w-8/12 ml-[55%] lg:w-full lg:ml-[10%] lg:mr-[10%]'>
          <h1 className="text-3xl font-bold font-nunito text-center text-black">Education</h1>
          <p className='text-lg lg:text-2xl font-nunito text-center mt-5 text-black'>Bergen Community College - Class of 2020</p>
          <p className='text-lg lg:text-2xl font-nunito text-center mt-5 text-black'>Associates in Buisness Administration</p>
          </div>
    </div>

    <button onClick={handleNext} className=" ml-[65%] md:ml-[40%] lg:ml-0 lg:mr-2 z-20 absolute lg:static">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>

  </div>


  <div className='fish-container size-36 mx-5 inset-x-full absolute hidden lg:block ' style={{'--swim-type': 'swim1', '--swim-delay': '2s'}}>
  <div className='fish-eye bg-white size-3 ml-32'></div>
  <div className='fish-tail size-1' 
  style={{ '--border-left-color': '#F05252',
   '--size-1': '3em', '--size-2': '6em', 
   '--tail-x': '-5em' , '--tail-y': '1.5em' ,'--tail-rotate': '0deg' }}></div>
    <div className='fish bg-red-500 size-36' ></div> </div>

    
  <div className='fish-container size-36 mx-5 inset-y-3/4 inset-x-full absolute hidden lg:block' style={{'--swim-type': 'swim2', '--swim-delay': '0s'}}>
  <div className='fish-eye bg-white size-3  ml-4 my-8 '></div>
  <div className='fish-tail size-1' 
  style={{ '--border-left-color': '#9061F9', 
  '--size-1': '2em', '--size-2': '4em',
  '--tail-x': '6em' , '--tail-y': '1em' ,'--tail-rotate': '180deg'}}></div>
    <div className='fish bg-purple-500 size-24 ' ></div> </div>

    <div className='fish-container size-36 mx-5 inset-y-2/3 inset-x-full absolute' style={{'--swim-type': 'swim2', '--swim-delay': '8s'}}>
  <div className='fish-eye bg-white size-3  ml-4 my-8 '></div>
  <div className='fish-tail size-1' 
  style={{ '--border-left-color': '#FF5A1F', 
  '--size-1': '1em', '--size-2': '2em',
  '--tail-x': '5em' , '--tail-y': '1.5em' ,'--tail-rotate': '180deg'}}></div>
    <div className='fish bg-orange-500 size-20 ' ></div> </div>



  </div>


</div>

        {/*
        <div className='z-0 h-full '>
          <div className={"flex flex-col z-10 h-full "}>
            <div className="font-inter z-10 text-center text-5xl text-black my-3 mt-80">this is about me</div>
          </div>
          </div>
  */}


      </div>
    </div>





    
  );
}

export default AboutMe;