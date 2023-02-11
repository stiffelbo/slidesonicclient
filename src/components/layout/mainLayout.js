import React from 'react';
import classes from './mainLayout.module.css';

const MainLayout = ({children, rwd}) => {    
    return ( <div style={{width: rwd.width, height: rwd.height}}>
            {children}
    </div> );
}
 
export default MainLayout;