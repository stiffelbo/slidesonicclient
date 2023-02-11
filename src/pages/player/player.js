import React, { useState, useEffect } from 'react';

import classes from './player.module.css';

//Mui
import { Typography } from '@mui/material';

const effects = ['shakeSide', 'heartbeat', 'spin', 'backspin', 'blur', 'shake', 'zoomInOut', 'wobble', 'wobbleContrast'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Player = ({ images, bpm, setBpm, rwd, setMode, currentImage, setCurrentImage }) => {

  const [animation, setAnimation] = useState('');
  const [transition, setTransition] = useState('');
  const [random, setRandom] = useState(false);
  const [autoPlay, setAutoplay] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const time = 60 / bpm * 2;
  const timeClear = (60 / bpm) * 1000 * 1.2;
  const style = {
    width: '${rwd.width}px', 
    height: `${rwd.height}px`,
    textAlign: 'center',
  };

  const clear = () => {
    setAnimation('');
  }

  const nextImage = () => {
    if(random){
      setAnimation(getRandomElement(effects));
    }else{
      setAnimation(transition);
    }
    setTimeout(()=>{
      setCurrentImage((currentImage + 1 + images.length) % images.length);
    }, timeClear / 4);
    setTimeout(clear, timeClear);    
  }

  const prevImage = () => {
    if(random){
      setAnimation(getRandomElement(effects));
    }else{
      setAnimation(transition);
    }
    setTimeout(()=>{
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }, timeClear / 4);
    setTimeout(clear, timeClear);    
  }

  useEffect(()=>{    
    if(autoPlay && !intervalId){
      const interval = 60 / bpm * 8 * 1000;
      console.log('set interval: ', intervalId);
      setIntervalId(setInterval(nextImage, interval));      
    }
    if(!autoPlay){
      console.log('clear Interval: ', intervalId);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [autoPlay]);

  useEffect(()=>{
  }, [animation, transition, currentImage]);

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
            if(random){
              setAnimation(getRandomElement(effects));
            }else{
              setAnimation(transition);
            }
            setTimeout(()=>{
              prevImage();
            }, timeClear / 4);
            setTimeout(clear, timeClear);
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowUp':
            setBpm(bpm + 1);
            break;
        case 'ArrowDown':
          setBpm(bpm - 1);
          break;
        case 'q':
            setAnimation('shake');
            setTransition('shake');
            setTimeout(clear, timeClear);
            break;
        case 'w':
            setAnimation('blur');
            setTransition('blur');
            setTimeout(clear, timeClear);
            break;
        case 'e':
            setAnimation('backspin');
            setTransition('backspin');
            setTimeout(clear, timeClear);
            break;
        case 'r':
            setAnimation('spin');
            setTransition('spin');
            setTimeout(clear, timeClear);
            break;
        case 't':
            setAnimation('heartbeat');
            setTransition('heartbeat');
            setTimeout(clear, timeClear);
            break;
        case 'y':
            setAnimation('shakeSide');
            setTransition('shakeSide');
            setTimeout(clear, timeClear);
            break;
        case 'u':
            setAnimation('wobble');
            setTransition('wobble');
            setTimeout(clear, timeClear);
            break;
        case 'i':
            setAnimation('zoomInOut');
            setTransition('zoomInOut');
            setTimeout(clear, timeClear);
            break;
        case 'o':
            setAnimation('wobbleContrast');
            setTransition('wobbleContrast');
            setTimeout(clear, timeClear);
            break;
        case 'z':
            setRandom(!random);
            break;
        case 'x':
            setAutoplay(!autoPlay);
            break;
        default:
            setAnimation('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImage, images.length, transition, animation, bpm, random, autoPlay]);


  return (
    <div style={style}>
        <div style={{position: 'absolute', top: '0.5em', left: '0.5em', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <img src="/img/logo.png" style={{width: '90px', cursor: 'pointer'}} className={classes.logo} onClick={()=>setMode('dash')}></img>
            <Typography variant="body1">T: {transition}</Typography>
            <Typography variant="body1">BPM: {bpm}</Typography>
            <Typography variant="body1">{animation && 'A: ' && animation}</Typography>
            <Typography variant="body1">{random && 'Random'}</Typography>
            <Typography variant="body1">{autoPlay && 'Autoplay'}</Typography>
        </div>
        <img src={images[currentImage]} style={{height: '100%', '--time' : `${time}s`}} className={classes[animation]}/>
    </div>
  );
};

export default Player;
