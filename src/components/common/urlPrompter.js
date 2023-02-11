import React, {Component} from 'react';

import PropTypes from 'prop-types';

//Mui
import { TextField } from '@mui/material';

class UrlPrompter extends Component {
    state = { 
        value : '',
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.value !== this.state.value){
            this.render();
        }
    }

    validateImageURL (url) {
        const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
        return regex.test(url);
    }

    handleChange (e){
        const value = e.target.value;
        this.setState({value})
        if(this.validateImageURL(value)){
            console.log(value);
            if(this.props.callback(value)){
                this.setState({value: 'ok, add another one....'});
                setTimeout(()=>{
                    this.setState({value: ''});
                }, 2500)
            }else{
                this.setState({value: 'cannot add to collection....'});
                setTimeout(()=>{
                    this.setState({value: ''});
                }, 2500)
            }
        }else{
            this.setState({value: 'this is not a url for image, paste proper one...'});
                setTimeout(()=>{
                    this.setState({value: ''});
                }, 2500)
        }
    }

    render() { 
        return (
            <TextField 
                label="Paste image url to add"
                size="small"
                value={this.state.value}
                sx={{width: "100%"}}
                variant="standard"
                onChange={e => this.handleChange(e)}
            />
        );
    }
}
 
export default UrlPrompter;

UrlPrompter.propTypes = {
    callback: PropTypes.func.isRequired
};