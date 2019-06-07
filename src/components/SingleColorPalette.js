import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {

    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: 'hex'
        }
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

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    };

    render() {
        const {format} = this.state;
        const colorBoxes = this._shades.map(color => {
            return <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
        })
        return (
            <div className="SingleColorPalette Palette">
                <Navbar 
                handleChange={this.changeFormat}
                showingAllcolors={false}
                 />
            <div className="Palette-colors">
                {colorBoxes}
                <div className='go-back ColorBox'>
                    <Link to={`/palette/${this.props.palette.id}`} className='back-button'>
                    Go back
                    </Link>
                </div>
            </div>
            <PaletteFooter 
            paletteName={this.props.palette.paletteName} 
            emoji={this.props.palette.emoji}  />
            </div>
        )
    }
}

export default SingleColorPalette
