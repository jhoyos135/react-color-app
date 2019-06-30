import React, {PureComponent} from 'react';
import styles from './styles/MiniPaletteStyles';
import {withStyles} from '@material-ui/styles';
import DeleteIcon  from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent  {

    deletePalette = (e) => {
        e.stopPropagation();
       this.props.openDialog(this.props.id)
        
    }

    render() {
        const {classes} = this.props;
        const miniColorBoxes = this.props.colors.map(color => {
            return (
                <div 
                key={color.name}
                className={classes.miniColor} 
                style={{background: color.color}}>
    
                </div>
            )
        })
        return (
            <div className={classes.root} onClick={() => this.props.handleClick(this.props.id)}>
                    <DeleteIcon 
                    className={classes.deleteIcon} 
                    onClick={this.deletePalette}
                    style={{transition: 'all 0.3s ease-in-out'}}/>
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                     <h5 className={classes.title}>
                         {this.props.paletteName} <span className={classes.emoji}> {this.props.emoji} </span>
                     </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette)
