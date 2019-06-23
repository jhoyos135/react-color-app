import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles'

class ColorPickerForm extends Component {

    state = {
        currentColor: 'teal',
        newColorName: '',

    };
    handleColorChange = (newColor) => {
		this.setState({
			currentColor: newColor.hex
		});
    };
    handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = ()=> {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.adddNewColor(newColor);
        this.setState({newColorName: ''})
    };

    render() {
        const {paletteFull, classes} = this.props;
        return (
            <div>
            <ChromePicker 
            className={classes.picker}
            color={this.state.currentColor} 
            onChangeComplete={this.handleColorChange} />

            <ValidatorForm onSubmit={this.handleSubmit}>
                <TextValidator
                    value={this.state.newColorName}
                    name='newColorName'
                    className={classes.colorNameInput}
                    placeholder='color name'
                    onChange={this.handleChange}
                    variant='filled'
                    margin='normal'
                    validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
                    errorMessages={[
                        'Enter a color name',
                        'Color name must be unique',
                        'Color already used!'
                    ]}
                />
                <Button
                    style={{ background: paletteFull ? 'gray' :this.state.currentColor }}
                    type="submit"
                    className={classes.addColor}
                    variant="contained"
                    color="primary"
                    disabled={paletteFull}
                >
                {paletteFull ? 'Palette Full' : 'AddColor'}
                </Button>
            </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)
