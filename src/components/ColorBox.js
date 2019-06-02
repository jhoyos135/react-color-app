import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
        const {name, background} = this.props
        return (
            <CopyToClipboard
            text={this.props.background}
            onCopy={this.changeCopyState}
            >
            <div 
            style={{ background: background }} 
            className='ColorBox'>

            <div style={{ background: background }}  
            className={`copy-overlay ${this.state.copied && 'show'}`}></div>
            <div className={`copy-msg ${this.state.copied && 'show'}`}>
                <h1>copied!</h1>
                <p> {this.props.background} </p>
            </div>

                <div className="copy-container">
                    <div className="box-content">
                        <span> {name} </span>
                    </div>
                    <button className="copy-button">
                        Copy
                    </button>
                </div>
                    <span className='see-more'>More</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
