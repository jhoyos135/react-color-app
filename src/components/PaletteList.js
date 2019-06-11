import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
	renderPalettes = () => {
		return this.props.palettes.map((palette) => {
			return <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />;
		});
	};

	goToPalette = (id) => {
		this.props.history.push(`/palette/${id}`);
	};

	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.container}>
					<nav className={this.props.classes.nav}>
						<h1>React-Color-App</h1>
						<Link to="/palette/new">Create New Palette</Link>
					</nav>
					<div className={this.props.classes.palettes}>{this.renderPalettes()}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
