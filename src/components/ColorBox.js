import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import {withStyles} from '@material-ui/styles';
import classNames from 'classnames'

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
            className={classNames(classes.copyOverlay, {[classes.showOverlay]: this.state.copied})}></div>
            <div className={classNames(classes.copyMessage, {[classes.showMessage]: this.state.copied})}>
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
