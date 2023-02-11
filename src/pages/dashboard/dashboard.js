import React, { useState, useEffect } from "react";
//Redux
import { connect } from 'react-redux';
import { getRwd } from "../../store/rwdRedux";


//Mui
import { Grid, Box } from "@mui/material";
//comp
import {Menu} from "../../components/menu/menu";
import {Gallery} from "../../components/gallery/gallery";

const Dashboard = ({rwd}) => {
    const firstColWidth = rwd.width / 5;
    const restWidth = rwd.width - firstColWidth;
  
    return (
      <div style={{display: 'flex', width: '100%', height: '100%', padding: 0, margin: 0}}>
        <div style={{width: firstColWidth, height: '100%'}}>
          <div style={{width: firstColWidth, height: '100%'}}>
            <Menu />
          </div>
        </div>
        <div style={{width: restWidth, height: '100%'}}>
          <Gallery />
        </div>
      </div>
    );
  };


 
const mapDispatchToProps = dispatch => ({
});
  
const mapStateToProps = state => ({
    rwd : getRwd(state),
});

const CTR = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export {CTR as  Dashboard};