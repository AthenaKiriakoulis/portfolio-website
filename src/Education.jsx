import React, {useState, useEffect, useRef} from 'react';
import 'animate.css';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

function Education(props) {
  const [animate, setAnimate] = useState(false);
  const [eduPosition, seteduPosition] = useState(undefined);
  const [TopS, setTopS] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    console.log('useEffect has been called');
    let element = document.getElementById("Edu-container");

    //measures the postion of the top of the edu container element
    //if scroll reaches a certatin point, animate is set to true,
    //and the edu conatiner is shown with animation
    function eduScrolly() {
      //for screens that are small
      if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        setAnimate(true);
      }
      let rect = element.getBoundingClientRect();
      seteduPosition(rect.top);  
      if(rect.top < 100 && !animate){
        setAnimate(true);
      }   
    }

    window.addEventListener("scroll", eduScrolly);
    return () => window.removeEventListener("scroll", eduScrolly);
    eduScrolly();
  }, [TopS]);


if(animate){
  const animations = ["animate__animated","animate__bounceInRight"]
  let element = document.getElementById("Edu-container");  
  element.classList.add(...animations);

   
}

//`About ${animate ? "animate__animated animate__bounceInLeft" : ""}`


if (animate){
  return (  
      <div id="Education" className={"Education"}>      
        <h1>
          Education
        </h1>
        <ul>
          <li>Stevens Institute of Technology - Class of 2024</li>
          <li>Cumulative GPA: 3.25</li>
          <li>
          <Accordion   sx={{backgroundColor: 'transparent', boxShadow: 'none', color: '#F0F8FF' }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className="Edu-Accordian">
               <u>Relevant Courses I've Taken</u>
            </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Algorithms</li>
                  <li>Data Structures</li>
                  <li>Computer Architecture</li>
                  <li>Database Management Systems</li>
                  <li>Operating Systems</li>
                  <li>Introduction to IT Security</li>
                  <li>Web Programming 1 (Node.js)</li>
                  <li>Web Programming 2 (React)</li>
              </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        </ul>
    </div>
  );
 }
}

export default Education;
