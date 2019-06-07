import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';
import './Navbar.css'

export class Navbar extends Component {

    state = {
        format: 'hex',
        open: false
    }

    handleChange = (e) => {
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    };

    closeSnackbar = () => {
        this.setState({open: false})
    }

    render() {
        const {level, changeLevel, showingAllcolors} = this.props;
        const {format} = this.state;
        return (
            <header className='Navbar'>
            <div className="logo">
                <Link to="/">React-Color-App</Link>
            </div>
            { showingAllcolors &&
            <div className="slider-container">
                <span>level: {level}</span>
            <div className='slider'>
                    <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={changeLevel}
                    />
                 </div>
            </div>
            }
            <div className="select-container">
                <Select value={format} onChange={this.handleChange} >
                    <MenuItem value="hex">
                    Hex
                    </MenuItem>
                    <MenuItem value="rgb">
                    RGB
                    </MenuItem>
                    <MenuItem value="rgba">
                    RGBA
                    </MenuItem>
                </Select>
            </div>
            <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}   
            open={this.state.open}   
            autoHideDuration={3000}
            message={ 
                <span id='message-id'>
                    Format Changed to {format.toUpperCase()}
                </span> }  
            ContentProps={{"aria-describedby": 'message-id'}}
            onClose={this.closeSnackbar}
            action={[
                <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
                    <CloseIcon />
                </IconButton>
            ]}
             />
            </header>
        )
    }
}

export default Navbar
