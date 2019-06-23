import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import styles from './styles/NewPaletteFormStyles'
class NewPaletteForm extends Component {

	static defaultProps = {
		maxColors: 20
	}

	state = {
		open: true,
		colors: this.props.palettes[0].colors
		};

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.state.colors.every(({ color }) => color !== this.state.currentColor)
		);
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	adddNewColor = (newColor) => {
		this.setState({
			colors: [ ...this.state.colors, newColor ],
			newColorName: ''
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (newPalette) => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = this.state.colors
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	};
	removeColor = (colorName) => {
		this.setState({
			colors: this.state.colors.filter(color => color.name !== colorName)
		})
	};
	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState(({colors}) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}))
	};
	clearColors = () => {
		this.setState({
			colors: []
		})
	};
	addRandomColor = () => {
		const allColors = this.props.palettes.map(p => p.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[rand];
		this.setState({colors: [...this.state.colors, randomColor]});

	}

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteFull = colors.length >= maxColors
		return (
			<div>
				<div className={classes.root}>

					<PaletteFormNav 
					open={open} 
					palettes={palettes}
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
					 />
			
					<Drawer
						className={classes.drawer}
						variant="persistent"
						anchor="left"
						open={open}
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<div className={classes.drawerHeader}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<div className={classes.container}>
						<Typography 
						gutterBottom
						variant="h4">Design your Palette</Typography>
						<div className={classes.buttons}>
							<Button
							 variant="contained" 
							 className={classes.button}
							 onClick={this.clearColors}
							 color="secondary">
								Clear Palette
							</Button>
							<Button 
							variant="contained" 
							className={classes.button}
							onClick={this.addRandomColor}
							disabled={paletteFull}
							color="primary">
								Random Color
							</Button>
						</div>

						<ColorPickerForm 
						adddNewColor={this.adddNewColor}
						paletteFull={paletteFull} />
						</div>
						
					</Drawer>

					<main
						className={classNames(classes.content, {
							[classes.contentShift]: open
						})}
					>
						<div className={classes.drawerHeader} />

						<DraggableColorList 
						colors={this.state.colors} 
						removeColor={this.removeColor}
						axis='xy'
						onSortEnd={this.onSortEnd}
						 />
						
					</main>
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
