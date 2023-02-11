import React from 'react';
import classes from './pageLayout.module.css';
import { Grid, Box } from '@mui/material'

const PageLayout = ({tabs, content}) => {
    return ( 
        <Box className={classes.root}>
            {tabs && <Box className={classes.tabs}>{tabs}</Box>}
            <Box className={tabs ? classes.content : classes.contentOnly}>{content}</Box>
        </Box>
     );
}
 
export default PageLayout;