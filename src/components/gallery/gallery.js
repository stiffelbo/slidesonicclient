import React, {useEffect} from 'react';
import classes from './gallery.module.css';

//Redux
import { connect } from 'react-redux';
import { getCurrentCollection } from "../../store/collectionsRedux";

//Mui
import { Box, Grid, Typography, IconButton } from "@mui/material";

const Gallery = ({images}) => {
    useEffect(()=>{

    },[images]);
    return ( 
        <Box className={classes.root}>
            {images.map(url => <div className={classes.imgWrapper} key={url}><img src={url}/></div>)}
        </Box>
     );
}


const mapDispatchToProps = dispatch => ({
    
});
  
const mapStateToProps = state => ({
    images : getCurrentCollection(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export {Container as  Gallery};