import React from 'react';
import classes from './nav.module.css';
import { Link } from 'react-router-dom';
//Mui
import { Box, Grid, Typography, IconButton } from "@mui/material";

const Nav = ({}) => {
    return ( <Box className={classes.root}>
        <Typography >Slide Sonic</Typography>
        <Link to="/player">
            <Typography>Player</Typography>
        </Link>
    </Box> );
}
 
export default Nav;