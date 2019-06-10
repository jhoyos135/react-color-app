import React from 'react';
import styles from './styles/MiniPaletteStyles';
import {withStyles} from '@material-ui/styles';

const MiniPalette = (props) => {
    const {classes} = props;
    const miniColorBoxes = props.colors.map(color => {
        return (
            <div 
            key={color.name}
            className={classes.miniColor} 
            style={{background: color.color}}>

            </div>
        )
    })
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
                 <h5 className={classes.title}>
                     {props.paletteName} <span className={classes.emoji}> {props.emoji} </span>
                 </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)
