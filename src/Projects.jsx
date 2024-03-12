import React, {useState, useEffect, useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
      <Card sx={{ maxWidth: 1000}}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            This Website
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This website uses React, Javascript, CSS, and is hosted on Github pages
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{color: "#FFFFFF"}} href="https://github.com/AthenaKiriakoulis/portfolio-website" size="small">Github Repository</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
 
}

export default Projects;
