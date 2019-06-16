import React from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import {SortableElement} from 'react-sortable-hoc'
;
const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover svg ': {
            color: 'white',
            transform: 'scale(1.2)'
        }
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0',
        bottom: '0',
        color: 'black',
        letterspacing: '1px',
        textTransform: 'uppercase',
        fontSize:' 12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        color: '#333',
        transition: 'all 0.2s ease-out'
    }
}

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
