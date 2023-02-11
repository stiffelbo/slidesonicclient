import React, {Component} from 'react';

import PropTypes from 'prop-types';

//Mui
import { TextField, IconButton, Grid, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function sanitizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "_");
}

class AddPrompter extends Component {
    state = { 
        value : '',
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.value !== this.state.value){
            this.render();
        }
    }

    handleChange = (e) => {
        const prohibitedNames = [...this.props.prohibitedNames];
        let value = e.target.value;
        value = sanitizeString(value);
        if(prohibitedNames.indexOf(value) > -1){
            this.setState({error: 'Collection Exists'})
        }else{
            this.setState({value, error : ''});
        }        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {value} = this.state;
        if(value){
            this.props.callback(value);
            this.setState({value: ''});
        }
    }

    render() { 
        return (    
            <form onSubmit={this.handleSubmit}>
                <TextField 
                    label="Collection Name"
                    size="small"
                    value={this.state.value}
                    sx={{width: "100%"}}
                    variant="standard"
                    onChange={e => this.handleChange(e)}
                    helperText={this.state.error}
                />
            </form>   
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