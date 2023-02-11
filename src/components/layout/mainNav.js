import React from 'react';
import {NavLink } from "react-router-dom";
import {pages} from '../../config/pages';
import classes from './mainNav.module.css';

//auth
import { getUser } from '../../services/authService';

//redux
import { connect } from 'react-redux';
import { getPage, setPage } from '../../store/navRedux';
//import { getLang, setLang } from '../../store/navRedux';

//Mui
import { IconButton, Grid, Box } from '@mui/material'

const MainNav = ({page, setPage, lang = 'pl', orientation = 'row'}) => {
    const user = getUser();
    const make = () => {
        if(pages.length){
            return (
                pages.map(item => {
                    const color = item.id === page ? 'primary' : 'default';
                    const show = (user && item.loggedOnly) || !item.loggedOnly ? true : false;
                    if(show){
                        return <NavLink key={item.id} to={item.path}>
                            <IconButton 
                                key={item.id}  
                                title={item.langTitle[lang]}    
                                onClick={()=>setPage(item.id)}  
                                color={color}                            
                            >
                                {item.icon}
                            </IconButton>
                        </NavLink>
                    }else{
                        return null;
                    }                   
                })
            );
        }
    }
    const display = orientation === 'row' ? classes.row : classes.col;
    return ( 
        <Box className={display}>
            {make()}
        </Box>
     );
}
 
const mapStateToProps = state => ({
    page: getPage(state),    
});

const mapDispatchToProps = (dispatch) => {
    return {      
      setPage: page => dispatch(setPage(page)),
    }
}

const CTR = connect(mapStateToProps, mapDispatchToProps)(MainNav);
 
export {  
    CTR as MainNav, 
}