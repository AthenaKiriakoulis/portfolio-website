import React, {useState, useEffect, useRef} from 'react';
import 'animate.css';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';



function Bottom(props) {

//`About ${animate ? "animate__animated animate__bounceInLeft" : ""}`



  return (  
      <div id="Bottom" className="Bottom">      
        <h2>
          Contact me
        </h2>
        <Stack direction="row" spacing={5}>
        <Link href="https://github.com/AthenaKiriakoulis" target="_blank" >
          <GitHubIcon className='icons'/>
        </Link>
        <Link href="https://www.linkedin.com/in/athena-kiriakoulis/" target="_blank" >
          <LinkedInIcon className='icons'/>
        </Link>
        <Link href="mailto:athena.kiriakoulis@gmail.com" target="_blank" >
          <EmailIcon className='icons'/>
        </Link>
        </Stack>
    </div>
  );

}

export default Bottom;
