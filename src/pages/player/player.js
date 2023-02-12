import React, { useState, useEffect } from 'react';

import classes from './player.module.css';

//Redux
import { connect } from 'react-redux';
import { setIdxRequest, getIdx, getCurrentCollection } from './../../store/collectionsRedux';


//Mui
import { Typography } from '@mui/material';

const effects = ['shakeSide', 'heartbeat', 'spin', 'backspin', 'blur', 'shake', 'zoomInOut', 'wobble', 'wobbleContrast'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Player = ({ images, idx, setIdx}) => {

  const [animation, setAnimation] = useState('');
  const [transition, setTransition] = useState('');
  const [random, setRandom] = useState(false);
  const [autoPlay, setAutoplay] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [bpm, setBpm] = useState(null);

  const time = 60 / bpm * 2;
  const timeClear = (60 / bpm) * 1000 * 1.2;

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
      setIdx((idx + 1 + images.length) % images.length);
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
      setIdx((idx - 1 + images.length) % images.length);
    }, timeClear / 4);
    setTimeout(clear, timeClear);    
  }
  
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
  }, [idx, images.length, transition, animation, bpm, random, autoPlay]);


  return (
    <div className={classes.root}>
        <img src={images[idx]} style={{height: '100%', '--time' : `${time}s`}} className={classes[animation]}/>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setIdx : name => dispatch(setIdxRequest(name)),
});

const mapStateToProps = state => ({
  images : getCurrentCollection(state),
  idx : getIdx(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Player);

export {Container as  Player};
