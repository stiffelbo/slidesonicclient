import React, { useState, useEffect } from "react";
//Redux
import { connect } from 'react-redux';
import { getRwd } from "../../store/rwdRedux";


//Mui
import { Grid, Box } from "@mui/material";
//comp
import {Menu} from "../../components/menu/menu";

const Dashboard = ({rwd}) => {
    const firstColWidth = rwd.width / 4;
    const restWidth = rwd.width - firstColWidth;
    const cellHeight = rwd.height / 3;
  
    return (
      <div style={{display: 'flex', width: rwd.width, height: rwd.height}}>
        <div style={{width: firstColWidth, height: rwd.height}}>
          <div style={{width: firstColWidth, height: cellHeight}}>
            <Menu />
          </div>
          <div style={{width: firstColWidth, height: cellHeight}}>
            Menu
          </div>
        </div>
        <div style={{width: restWidth, height: rwd.height}}>
          Gallery
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