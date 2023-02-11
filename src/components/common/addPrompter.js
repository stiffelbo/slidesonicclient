import React, {Component} from 'react';

import PropTypes from 'prop-types';

//Mui
import { TextField, IconButton, Grid, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

class AddPrompter extends Component {
    state = { 
        value : '',
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.value !== this.state.value){
            this.render();
        }
    }

    handleChange (e){
        const value = e.target.value;
        this.setState({value})
    }

    render() { 
        return (       
            <TextField 
                label="Collection Name"
                size="small"
                value={this.state.value}
                sx={{width: "100%"}}
                variant="standard"
                onChange={e => this.handleChange(e)}
            />
        );
    }
}
 
export default AddPrompter;

AddPrompter.propTypes = {
    callback: PropTypes.func.isRequired,
    prohibitedNames: PropTypes.array.isRequired,
};

AddPrompter.defaultProps = {
    prohibitedNames : [],
}