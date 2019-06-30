import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PaletteMetaForm from './PaletteMetaForm';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ValidatorForm } from 'react-material-ui-form-validator';
import styles from './styles/PaletteFormNavStyles'


class PaletteFormNav extends Component {

    state = {
        newPaletteName: '',
        formShowing: false
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
          this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          )
        );
      }

    handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    showForm = (e) => {
        this.setState({
            formShowing: true
        })
    };
    hideForm = () => {
        this.setState({
            formShowing: false
        })
    }

    render() {
        const {classes, open, handleSubmit, palettes} = this.props;
        return (
            <div className={classes.root} >
                <CssBaseline />

                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to='/'>
                        <Button 
                        className={classes.button}
                        variant='contained' 
                        color='secondary'> 
                        Go Back 
                        </Button>
                        </Link>
                        <Button
                        className={classes.button}
                        variant='contained'
                        color='primary'
                        onClick={this.showForm}
                        >
                        Save
                        </Button>
                        </div>
                </AppBar>
                {this.state.formShowing &&
                        <PaletteMetaForm
                            hideForm={this.hideForm}
                            palettes={palettes}
                            handleSubmit={handleSubmit} />
                }
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
