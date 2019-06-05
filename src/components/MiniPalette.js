import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: '#dae1e4',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'grey',
        height: '100px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        'position': 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    }
}

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
        <div className={classes.root}>
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
