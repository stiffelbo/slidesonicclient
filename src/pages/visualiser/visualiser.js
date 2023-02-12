import React, { useState, useEffect } from 'react';

import classes from './visualiser.module.css';

//Redux
import { connect } from 'react-redux';
import { setIdxRequest, getIdx, getCurrentCollection } from './../../store/collectionsRedux';
import { getBpm, setBpmRequest, getVisual, setCurrentRequest, getMultiplier, setMultiplierRequest } from './../../store/visualsRedux';


const Visualiser = ({ images, idx, setIdx, bpm, setBpm, current, setCurrent}) => {


    const nextImage = () => {
        if(idx < images.length){
            setIdx(idx + 1);
        }else{
            setIdx(0);
        }
    }

    const prevImage = () => {
        if(idx > 0){
            setIdx(idx - 1);
        }else{
            setIdx(images.length -1);
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
          switch (event.key) {
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            default:
                setCurrent('');
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [idx, images.length]);

    return (
        <div className={classes.root}>
            <img src={images[idx]}></img>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
  setIdx : name => dispatch(setIdxRequest(name)),
  setBpm : name => dispatch(setBpmRequest(name)),
  setCurrent : name => dispatch(setCurrentRequest(name)),
  setMultiplier : name => dispatch(setMultiplierRequest(name)),
});

const mapStateToProps = state => ({
  images : getCurrentCollection(state),
  idx : getIdx(state),
  bpm : getBpm(state),
  current : getVisual(state),
  multiplier : getMultiplier(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Visualiser);

export {Container as  Visualiser};
