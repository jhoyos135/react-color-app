import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class PaletteList extends Component {
    renderPalettes = () => {
        return this.props.palettes.map(palette => {
            return (
                <p>
                <Link to={`/palette/${palette.id}`}>
                {palette.paletteName}
                </Link>
                </p>
            )
        })
    }
    render() {
        return (
            <div>
                <h1>React colors</h1>
                {this.renderPalettes()}
            </div>
        )
    }
}

export default PaletteList
