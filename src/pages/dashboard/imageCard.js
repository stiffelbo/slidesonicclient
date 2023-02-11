import React from "react";
import classes from './imageCard.module.css';
import { copyTxtToClipboard } from '../../utils/copyToClipboard';

import { Box, IconButton } from "@mui/material";
//Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ImageCard = ({url, onLeft, onRight, onDelete, imgIndex}) => {

    const handleDelete = () => {
        onDelete(imgIndex);
    }

    const handleLeft = () => {
        onLeft(imgIndex);
    }

    const handleRight = () => {
        onRight(imgIndex);
    }

    const handleCopy = e => {
        const res = copyTxtToClipboard(url);
    }

    if(url){
        return ( <Box className={classes.card}>
            <Box sx={{
                height: '100%',
                backgroundImage: `url('${url}')`,
                objectFit: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}/>
            <IconButton color="primary" onClick={e=>handleCopy(e)} className={classes.copyBtn} title="copy url">
                <ContentCopyIcon />
            </IconButton>
            <IconButton color="error" onClick={handleDelete} className={classes.deleteBtn}>
                <ClearIcon />
            </IconButton>
            <Box className={classes.buttonBox}
                sx={{
                    position: 'absolute',
                    width: '100%',
                    margin: '0 auto',
                    bottom: 16,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <IconButton color="info" onClick={handleLeft}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton color="info" onClick={handleRight}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box> );
    }
    
}
 
export default ImageCard;