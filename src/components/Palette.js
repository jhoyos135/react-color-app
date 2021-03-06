import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';
export class Palette extends Component {

    state = {
        level: 500,
        format: 'hex'
    };

    changeLevel = (level) => {
        this.setState({
            level
        })
    };
    changeFormat = (val) => {
        this.setState({
            format: val
        })
    };
    
    render() {
        const {level, format} = this.state;
        const {classes} = this.props;
        const colorBoxes = this.props.palette.colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name} key={color.id} colorId={color.id} paletteId={this.props.palette.id} showingFullPalette={true} />
        });

        return (
            <div className={classes.Palette}>
               <Navbar 
               level={level} 
               changeLevel={this.changeLevel}
               handleChange={this.changeFormat}
               showingAllcolors={true}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div> 
                <PaletteFooter 
                paletteName={this.props.palette.paletteName}
                emoji={this.props.palette.emoji}
                 />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)
