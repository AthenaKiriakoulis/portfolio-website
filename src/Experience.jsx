import React, {useState, useEffect} from 'react';
import './App.css';
import background from './assets/jonathan-roger-unsplash.jpg';
import 'animate.css';
import { Accordion } from 'flowbite';



function Experience() {

  const[staticVisible, setStaticVisible] = useState(true);
  const [index, setIndex] = useState(0);

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
    <div  className='App w-full h-screen '>

    <div className='relative z-0 h-full w-full content-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#26006A] via-[#270048] to-[#120014]'>
      <div className='rect absolute inset-0 m-auto h-full z-10 w-full opacity-10 bg-purple-900 rotate-45'>  </div>
      <div className='rect1 absolute inset-0 m-auto h-full z-20 w-full opacity-10 bg-purple-900 rotate-[50deg]'>  </div>
      <div className='rect2 absolute inset-0 m-auto h-full z-30 w-full opacity-10 bg-purple-900 rotate-[55deg]'>  </div>
      <div className='rect3 absolute inset-0 m-auto h-full z-40 w-full opacity-10 bg-purple-900 rotate-[60deg]'>  </div>


    <div className='absolute inset-0 flex items-center justify-center z-[100]'>
    <button onClick={handlePrevious} className="ml-0 lg:ml-3 z-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6  lg:mx-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <div className=' relative rounded-xl z-10 flex flex-row  w-10/12 h-[95%] mt-0 md:w-8/12 md:h-[70%] lg:w-5/12 lg:h-[90%] lg:my-10' >
    <div className='  absolute w-full h-full z-10 bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 blur'></div>
    <div className='  relative m-1 rounded-xl w-full  z-20 flex flex-row overflow-hidden bg-[#150021]    '>
    <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(index * 110)}%)`, width: '100%' }}>

    <div className='shrink-0 w-full my-5' style={{marginLeft:`0%`, marginRight:`5%`}}>
          <h1 className="text-3xl font-bold font-rubik text-center text-violet-50">React Developer </h1>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3 text-violet-50 italic'>Stevens Institute of Technology</p>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3 text-violet-50 italic'>Jun 2023 – Aug 2024</p>
          <ul className='list-disc w-10/12 list-outside mx-10'>
            <li className='text-md md:text-lg  font-nunito mt-3 text-violet-50 text-left'>Elevated performance and usability of the Nukemap website 
                by developing React components, resulting in refined user experience for a high-traffic platform with over 300,000 page views monthly.</li>
            <li className='text-md md:text-lg  font-nunito mt-3 text-violet-50 text-left'>Optimized the Nukemap website's codebase for scalability and future updates by collaborating with a team of
                  four to migrate legacy code to React, ensuring smoother and more maintainable development.</li>
            <li className='text-md md:text-lg  font-nunito mt-3 text-violet-50 text-left'>Revamped user interface elements by translating legacy components into React and integrating them
                  seamlessly with existing code, resulting in consistent design and functionality across the website</li>
          </ul>
          </div>

          <div className='shrink-0 w-full my-5 ' style={{marginLeft:`5%`, marginRight:`5%`}}>
          <h1 className="text-3xl md:text-3xl font-bold font-rubik  text-center text-violet-50">Writing and Research Director</h1>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3  text-violet-50 italic'>Stevens Institute of Technology </p>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3  text-violet-50 italic'>Jun 2022 - Aug 2024</p>
          <ul className='list-disc w-10/12 list-outside mx-10'>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Established the foundational structure for a video game based on Nuclear History by 
            interpreting over 700 pages of research documents, ensuring accuracy and depth in the game's content.</li>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Boosted team productivity by 20% as measured by the completion of weekly project goals, 
            by coordinating a team of 14 writers and researchers to deliver high-quality content efficiently.</li>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Improved project oversight and team alignment reflected in consistent progress reviews, 
            by facilitating weekly meetings with a group of ten team members to assess and drive overall project progress.</li>
          </ul>
          </div>

          <div className='shrink-0 w-full my-5' style={{marginLeft:`5%`, marginRight:`5%`}}>
          <h1 className="text-3xl md:text-3xl font-bold font-rubik text-center text-violet-50">Teaching Assistant</h1>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3  text-violet-50 italic'>Stevens Institute of Technology </p>
          <p className='text-md md:text-lg font-nunito text-center mt-1 lg:mt-3  text-violet-50 italic'>Sept 2023 - Dec 2023</p>
          <ul className='list-disc w-10/12 list-outside mx-10'>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Supported the grading process for a web development 
            graduate class of over 180 students by facilitating the professor’s grading efforts, resulting in efficient completion 
            of assignments over a 15-week course.</li>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Resolved student grading concerns and assignment questions
             by providing prompt and detailed email responses, addressing inquiries from students across six class sections.</li>
            <li className='text-md md:text-lg font-nunito text-left mt-3 text-violet-50'>Enhanced student understanding of Node.js and JavaScript by 
            conducting independent office hours and offering one-to-one support for at least two hours each week, leading to higher 
            comprehension and engagement.</li>
          </ul>
          </div>
      </div>
    </div>
    </div>
    <button onClick={handleNext} className="mr-0 lg:mr-3 z-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 lg:mx-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    </div>
  


    </div>

    </div>

    
  );
}

export default Experience;