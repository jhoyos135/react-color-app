import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

const styles = {
    root: {
        backgroundColor: '#333',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
};

export class PaletteList extends Component {
    renderPalettes = () => {
        return this.props.palettes.map(palette => {
            return (
                <MiniPalette {...palette} 
                handleClick={ () => this.goToPalette(palette.id) }
                 />
            )
        })
    };

    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`);
    }


    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React-Color-App</h1>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {this.renderPalettes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)
