import React, { useState, useEffect } from "react";
//Redux
import { connect } from 'react-redux';
import { getCollections, addCollectionRequest, deleteCollectionRequest, updateCollectionRequest } from "../../store/collectionsRedux";

//Mui
import { Box, Grid } from "@mui/material";

//Comp
import UrlPrompter from "../common/urlPrompter";
import AddPrompter from "../common/addPrompter";
import SelectSimple from "../common/selectSimple";

const Menu = ({collections, add, remove, update}) => {
    const [collection, setCollection] = useState('');

    const handleAddUrl = url => {
        if(collection){
            const collectionData = [...collections[collection]];
            collectionData.push(url);
            update(collection, collectionData);
            return true;
        }else{
            return false;
        }
    }

    
    const renderCollectionsList = () => {
        const collectionsNames = Object.keys(collections);
        if(collectionsNames.length){
            return <SelectSimple 
                        options={collectionsNames}
                        value={collection}
                        onChange={val => setCollection(val)}
                    />
        }
    }

    const renderAddUrl = () => {
        if(collection){
            return <UrlPrompter callback={handleAddUrl} />
        }
    }

    const handleAddCollection = value => {
        add(value);
    }

    return ( <Box p={1}>
        <Grid container>
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
  });
  
const mapStateToProps = state => ({
    collections : getCollections(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Menu);

export {Container as  Menu};