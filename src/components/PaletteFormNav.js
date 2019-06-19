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
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const drawerWidth = 400;

const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
    },
    navBtns: {
        marginRight: '1rem',
        '& a': {
            textDecoration: 'none'
        }
    },
    button: {
        margin: '0 0.5rem',
        '& a': {
            textDecoration: 'none'
        }
    }
});

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
        const {newPaletteName} = this.state;
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
                            <MenuIcon />
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
