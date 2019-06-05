import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {

    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades = (palette, filterColor) => {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat (
                allColors[key].filter(color => color.id === filterColor)
            )
        }
        return shades.slice(1);
    };

    render() {
        const colorBoxes = this._shades.map(color => {
            return <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
        })
        return (
            <div className="Palette">
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            </div>
        )
    }
}

export default SingleColorPalette
