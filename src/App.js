import React, { Component } from 'react';
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import {generatePalette} from './components/colorHelpers';

export class App extends Component {
  render() {
    console.log(generatePalette(seedColors[1]))
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    )
  }
}

export default App

