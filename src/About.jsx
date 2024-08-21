import React, {useState, useEffect, useRef} from 'react';
import 'animate.css';


function About(props) {
  const [animate, setAnimate] = useState(false);
  const [aboutPosition, setaboutPosition] = useState(undefined);
  const [TopS, setTopS] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    console.log('useEffect has been called');
    let element = document.getElementById("About-container");

    //measures the postion of the top of the about container element
    //if scroll reaches a certatin point, animate is set to true,
    //and the about conatiner is shown with animation
    function aboutScrolly() {
      let rect = element.getBoundingClientRect();
      setaboutPosition(rect.top); 
      //for screens that are small
      if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        setAnimate(false);
      }
      else if(rect.top < 200 && !animate){
        setAnimate(true);
      }   
    }

    window.addEventListener("scroll", aboutScrolly);
    return () => window.removeEventListener("scroll", aboutScrolly);
    aboutScrolly();
  }, [TopS]);


if(animate){

  const animations = ["animate__animated","animate__bounceInLeft"]
  let element = document.getElementById("About-container");  
  element.classList.add(...animations);

   
}

//`About ${animate ? "animate__animated animate__bounceInLeft" : ""}`


if (animate){
  return (  
      <div id="About" className={"About"}>      
        <h1>
          About
        </h1>
        <p>
          I am a software developer, recently graduated from Stevens Institute of Technology in May 2024
          with a Bachelors in Computer Science.
        </p>
    </div>
  );
 }
}

export default About;
