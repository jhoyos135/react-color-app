import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import styles from './styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';
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
        const {classes} = this.props;
        const colorBoxes = this._shades.map(color => {
            return <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
        })
        return (
            <div className={`SingleColorPalette ${classes.Palette}`}>
                <Navbar 
                handleChange={this.changeFormat}
                showingAllcolors={false}
                 />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={`${classes.goBack}`}>
                    <Link to={`/palette/${this.props.palette.id}`} >
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

export default withStyles(styles)(SingleColorPalette)
