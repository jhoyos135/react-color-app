import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'


export class PaletteMetaForm extends Component {
    state = {
        stage: 'form',
        newPaletteName: ''
    };

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    showEmojiPicker = () => {
      this.setState({
        stage: 'emoji'
      })
    };
    savePalette = (emoji) => {
      const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native};
      this.props.handleSubmit(newPalette)
    }

render() {
    const { newPaletteName, open } = this.state;
    const {hideForm, handleSubmit} = this.props;

    return (
      <Fragment>
      <Dialog open={this.state.stage === 'emoji'} onClose={hideForm}>
        <Picker onSelect={this.savePalette} title='pick an emoji' />
      </Dialog>
        <Dialog
          open={this.state.stage === 'form'}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
          <ValidatorForm
              onSubmit={this.showEmojiPicker}
            >
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette, make sure is unique
            </DialogContentText>

              <TextValidator
                label='Palette Name'
                value={newPaletteName}
                name='newPaletteName'
                onChange={this.handleChange}
                fullWidth
                margin='normal'
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
           
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
                Save Palette
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
      </Fragment>
    );
  }
}

export default PaletteMetaForm
