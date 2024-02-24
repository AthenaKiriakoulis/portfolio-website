import React, {useState, useEffect, useRef} from 'react';
import 'animate.css';


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
        <p>
          I am a student at Stevens Institute of Technology, working on a Bachelors in Computer Science.
          Currently, I'm in my last semester and will be graduating in May 2024. 
        </p>
    </div>
  );
 }
}

export default Experience;
