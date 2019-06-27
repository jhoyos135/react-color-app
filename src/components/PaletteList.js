import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export class PaletteList extends Component {
	// renderPalettes = () => {
			
	// 			this.props.palettes.map((palette) => {
	// 				<MiniPalette {...palette} key={palette.id} handleClick={() => this.goToPalette(palette.id)} handleDelete={this.props.deletePalette} id={palette.id} />;
	// 		})
			
	// };

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
						
						<TransitionGroup className={this.props.classes.palettes}> 
							{
								this.props.palettes.map((palette) => {
									return (
										<CSSTransition 
										key={palette.id} 
										classNames='fade' 
										timeout={300}
										>
										<MiniPalette 
										{...palette} 
										key={palette.id} 
										handleClick={() => this.goToPalette(palette.id)} 
										handleDelete={this.props.deletePalette} 
										id={palette.id} />
									</CSSTransition>
									)

									})
							}
						</TransitionGroup>

						
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
