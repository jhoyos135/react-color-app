import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import { generatePalette } from './components/colorHelpers';

export class App extends Component {

	constructor(props) {
		super(props)
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savedPalettes || seedColors
		}
	}

	findPalette = (id) => {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	};
	deletePalette = (id) => {
		this.setState(st => ({
			palettes: st.palettes.filter(palette => palette.id !== id)
		}), this.syncLocalStorage)
	} 
	savePalette = (newPalette) => {
		this.setState({
			palettes: [...this.state.palettes, newPalette]
		}, this.syncLocalStorage)
	};
	syncLocalStorage = () => {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
	}

	render() {
		return (
			<Switch>
				<Route 
				exact 
				path="/palette/new" 
				render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes}  />} />
				<Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} deletePalette={this.deletePalette} />} />

				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>

				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
