import React from "react";
import { Box, Grid, IconButton } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from '@mui/icons-material/Image';
import SpeedIcon from '@mui/icons-material/Speed';

const CheckList = ({userName, images, bpm, width = "100%"}) => {

    const userNameTitle = userName ? "Username checked!" : "Write Username";
    const imagesTitle = images ? `Got ${images.length} images to sonic, great!` : "Drop some images to sonic with!";
    const bpmTitle = `You are set for ${bpm} bpm`;

    return ( <Box sx={{width}}>
        <Grid container spacing={3}>
            <Grid item md={4} sx={{textAlign: 'center'}}>
                <IconButton title={userNameTitle} disabled={!userName ? true : false} color="success">
                    <AccountCircleIcon />
                </IconButton>
            </Grid>
            <Grid item md={4} sx={{textAlign: 'center'}}>
                <IconButton title={imagesTitle} disabled={!images.length ? true : false} color="success">
                    <ImageIcon />
                </IconButton>
            </Grid>
            <Grid item md={4} sx={{textAlign: 'center'}}>
                <IconButton title={bpmTitle} color="success">
                    <SpeedIcon />
                </IconButton>
            </Grid>
        </Grid>
    </Box> );
}
 
export default CheckList;