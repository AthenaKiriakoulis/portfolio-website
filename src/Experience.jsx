import React, {useState, useEffect, useRef} from 'react';
import 'animate.css';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';


function Experience(props) {
  const [animate, setAnimate] = useState(false);
  const [expPosition, setexpPosition] = useState(undefined);
  const [TopS, setTopS] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    console.log('useEffect has been called');
    let element = document.getElementById("Exp-container");

    //measures the postion of the top of the exp container element
    //if scroll reaches a certatin point, animate is set to true,
    //and the exp conatiner is shown with animation
    function expScrolly() {
      let rect = element.getBoundingClientRect();
      setexpPosition(rect.top); 
      //for screens that are small
      if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        setAnimate(true);
      }
      else if(rect.top < 200 && !animate){
        setAnimate(true);
      }   
    }

    window.addEventListener("scroll", expScrolly);
    return () => window.removeEventListener("scroll", expScrolly);
    expScrolly();
  }, [TopS]);


if(animate){
  const animations = ["animate__animated","animate__bounceInLeft"]
  let element = document.getElementById("Exp-container");  
  element.classList.add(...animations);

   
}

//`About ${animate ? "animate__animated animate__bounceInLeft" : ""}`


if (animate){
  return (  
      <div id="Experience" className={"Experience"}>      
        <h1>
          Experience
        </h1>
        <Accordion   sx={{backgroundColor: 'transparent', boxShadow: 'none', color: '#F0F8FF' }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className="Edu-Accordian">
               <u>Work Experience</u>
            </AccordionSummary>
              <AccordionDetails>
                <ul className = "Exp-List">
                  <li><b>Teaching Assistant for Web Development 1</b></li>
                  <ul >
                    <li>Facilitated professor in grading assignments for a class of over 180 students over the course of 15 weeks</li>
                    <br/>
                    <li>Responded to emails and provided detailed answers to questions from students in more than six class sections
                        about grading concerns and assignment questions</li>
                    <br/>
                    <li>Conducted independent office hours and engaged one-to-one with students in person for at least two hours each
                        week in topics such as node.js and JavaScript</li>
                  </ul>
              </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion   sx={{backgroundColor: 'transparent', boxShadow: 'none', color: '#F0F8FF' }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className="Edu-Accordian">
               <u>Research Experience</u>
            </AccordionSummary>
              <AccordionDetails>
                <ul className = "Exp-List">
                  <li><b>Strategy Video Game Based around Nuclear War History </b> - <i></i></li>
                  <ul >
                    <li>Interpreted 700+ pages of Nuclear History research documents to provide basis for overall gameplay structure</li>
                    <br/>
                    <li>Coordinated writing and research teams of five to deliver on weekly project goals, boosting productivity by 20%</li>
                    <br/>
                    <li>Communicated with teams in a group of ten during regular weekly meetings to review overall progress of project</li>
                  </ul>
              </ul>
              <ul className = "Exp-List">
                  <li><b>Application of Robot Operating System in Robot Swarms  </b></li>
                  <ul >
                    <li>Developed and deployed Python and ROS environments to simulate swarming patterns of robot flocks, which
                        increased the efficiency of the robots' coordination by 40%</li>
                    <br/>
                    <li>Analyzed several algorithms to replicate the swarming behavior of different types of animals and apply to robot
                        movement patterns</li>
                  </ul>
              </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion   sx={{backgroundColor: 'transparent', boxShadow: 'none', color: '#F0F8FF' }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className="Edu-Accordian">
               <u>Leadership Experience</u>
            </AccordionSummary>
              <AccordionDetails>
                <ul className = "Exp-List">
                  <li><b>Stevens Cyber Defense Team </b>: <i>President (Sept 2023 - Now )</i></li>
                  {/* 
                  <ul >
                    <li>Interpreted 700+ pages of Nuclear History research documents to provide basis for overall gameplay structure</li>
                    <br/>
                    <li>Coordinated writing and research teams of five to deliver on weekly project goals, boosting productivity by 20%</li>
                    <br/>
                    <li>Communicated with teams in a group of ten during regular weekly meetings to review overall progress of project</li>
                  </ul>
                  */}
              </ul>
              <ul className = "Exp-List">
                  <li><b>Stevens Trivia Team </b>  - <i>Secretary (Sept 2023 - Now )</i></li>
                  {/*
                  <ul >
                    <li>Developed and deployed Python and ROS environments to simulate swarming patterns of robot flocks, which
                        increased the efficiency of the robots' coordination by 40%</li>
                    <br/>
                    <li>Analyzed several algorithms to replicate the swarming behavior of different types of animals and apply to robot
                        movement patterns</li>
                  </ul>
                */}
              </ul>
              </AccordionDetails>
            </Accordion>
    </div>
  );
 }
}

export default Experience;
