import React, { useState, useEffect } from 'react';

import classes from './visualiser.module.css';

//Redux
import { connect } from 'react-redux';
import { setIdxRequest, getIdx, getCurrentCollection } from './../../store/collectionsRedux';


const Visualiser = ({ images, idx, setIdx}) => {

    console.log(images, idx, images[idx]);

    return (
        <div className={classes.root}>
            <div style={{backgroundImage: `url(${images[idx]})`}} className={classes.wrapper}></div>
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Visualiser);

export {Container as  Visualiser};
