import React, {useState, useEffect, useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import './App.css';

function Projects(props) {
  const theme = createTheme({
    raisedButton: {
      textColor: '#ffffff', // this should work
      primaryTextColor: '#ffffff' // or this if using `primary` style
    },
    palette: {
      background: {
        paper: '#6E51DE',
      }
    },
    typography: {
      allVariants: {
        fontFamily: 'Lexend_MegaR',
        textTransform: 'none',
        
      },
    },
  });

  return (  
    <ThemeProvider theme={theme}>
      <h1> Projects</h1>
      <Stack spacing={5}>
      <Card sx={{ maxWidth: 1000, marginTop: 'auto',}}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            This Website
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This website uses React, Javascript, CSS, and it is hosted on Github pages
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{color: "#FFFFFF"}} href="https://github.com/AthenaKiriakoulis/portfolio-website" size="small">Github Repository</Button>
        </CardActions>
      </Card>


      <Card sx={{ maxWidth: 1000, marginTop: 'auto'}}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            OR83 Bounty Board
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Another project Im working on needed a system where tasks could be created based on
            a map, and other team members could assign themselves to the tasks. Thus, I created a bounty
            board that simulates this system. It runs on react with a firebase firestore database holding 
            the data
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{color: "#FFFFFF"}} href="https://github.com/AthenaKiriakoulis/OR83-Bounty-Board" size="small">Github Repository</Button>
          <Button sx={{color: "#FFFFFF"}} href="https://or-83-bounty-board.vercel.app/" size="small">Website</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 1000, marginTop: 'auto'}}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Spelling Bee Clone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Spelling Bee is a game on the New York Times Webiste.
            this is a clone made with python and tkinter that randomly generates the
            game and provides the solution.
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{color: "#FFFFFF"}} href="https://github.com/AthenaKiriakoulis/SpellingBeeClonePython" size="small">Github Repository</Button>
        </CardActions>
      </Card>
      </Stack>
    </ThemeProvider>
  );
 
}

export default Projects;
