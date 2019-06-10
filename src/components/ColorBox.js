import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import {withStyles} from '@material-ui/styles';

export class ColorBox extends Component {

    state = {
        copied: false
    };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
    }

    render() {
        const {name, background, paletteId, colorId, showingFullPalette, classes} = this.props;
        return (
            <CopyToClipboard
            text={this.props.background}
            onCopy={this.changeCopyState}
            >
            <div 
            style={{ background: background }} 
            className={classes.ColorBox}>

            <div style={{ background: background }}  
            className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`}></div>
            <div className={`${classes.copyMessage} ${this.state.copied && classes.showMessage}`}>
                <h1>copied!</h1>
                <p className={classes.copyText}> {this.props.background} </p>
            </div>

                <div>
                    <div className={classes.boxContent} >
                        <span className={classes.colorName}> {name} </span>
                    </div>
                    <button className={classes.copyButton}>
                        Copy
                    </button>
                </div>
{showingFullPalette && (
                <Link 
                to={`/palette/${paletteId}/${colorId}`} 
                onClick={(e) => e.stopPropagation()}>
                    <span className={classes.seeMore}>MORE</span>
                </Link>
)}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)
