import React from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement((props) => {
    const {classes, color} = props;
    return (
        <div
        className={classes.root} 
        style={{background: color}}>
        <div className={classes.boxContent}>
           <span> {props.name} </span>
           <DeleteIcon
            onClick={props.handleClick}
            className={classes.deleteIcon} />
        </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)
