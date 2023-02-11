import React, { useState, useEffect } from "react";
//Redux
import { connect } from 'react-redux';
import { getCollections, addCollectionRequest, deleteCollectionRequest, updateCollectionRequest, getCurrent, setCurrentRequest } from "../../store/collectionsRedux";

//Mui
import { Box, Grid, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//Comp
import UrlPrompter from "../common/urlPrompter";
import AddPrompter from "../common/addPrompter";
import SelectSimple from "../common/selectSimple";

const Menu = ({collections, add, remove, update, current, setCurrent}) => {

    useEffect(()=>{}, [collections, current]);

    const handleAddCollection = value => {
        add(value);
    }

    const handleAddUrl = url => {
        if(current){
            const collectionData = collections[current];
            collectionData.push(url);
            update(current, collectionData);
            return true;
        }else{
            return false;
        }
    }

    const handleDelete = () => {
        remove(current);
    }
    
    const renderCollectionsList = () => {
        const collectionsNames = Object.keys(collections);
        if(collectionsNames.length){
            return <SelectSimple 
                        options={collectionsNames}
                        value={current}
                        onChange={val => setCurrent(val)}
                    />
        }
    }

    const renderAddUrl = () => {
        if(current){
            return <UrlPrompter callback={handleAddUrl} />
        }
    }    

    const renderCollection = () => {
        if(current){
            return <Grid container spacing={3}>
                <Grid item md={10}>
                    <Typography variant="h6">{current}</Typography>
                </Grid>
                <Grid item>
                    <IconButton 
                        color="error"
                        onClick={handleDelete}
                    >
                        <DeleteForeverIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        }else{
            return <Typography variant="h6">Select Collection...</Typography>
        }
    }    

    return ( <Box p={1}>
        <Grid container spacing={3}>
            <Grid item md={12}>
                {renderCollection()}
            </Grid>
            <Grid item md={6}>
                <AddPrompter callback={handleAddCollection} />
            </Grid>
            <Grid item md={6}>
                {renderCollectionsList()}
            </Grid>
            <Grid item md={12}>
                {renderAddUrl()}
            </Grid>
        </Grid>
        
        
        
    </Box> );
}
 
export default Menu;

const mapDispatchToProps = dispatch => ({
    add : name => dispatch(addCollectionRequest(name)),
    remove : name => dispatch(deleteCollectionRequest(name)),
    update : (name, data) => dispatch(updateCollectionRequest(name, data)),
    setCurrent : name => dispatch(setCurrentRequest(name)),
  });
  
const mapStateToProps = state => ({
    collections : getCollections(state),
    current : getCurrent(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Menu);

export {Container as  Menu};