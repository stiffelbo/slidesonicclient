import React from 'react';
import classes from './topBar.module.css';
import { IconButton, Grid, Box, Avatar, Divider } from '@mui/material'

const TopBar = () => {
    return ( 
        <Box className={classes.row}>
            <Avatar>KB</Avatar>
        </Box>
     );
}
 
export default TopBar;