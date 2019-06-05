import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import PaletteList from './components/PaletteList.js';
import {generatePalette} from './components/colorHelpers';

export class App extends Component {
  findPalette = (id) => {
    return seedColors.find(function(palette) {
      return palette.id === id
    });
  }
  render() {
    return (
      <Switch>
      <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
      <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
    )
  }
}

export default App

