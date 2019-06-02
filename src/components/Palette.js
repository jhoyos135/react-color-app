import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css'


export class Palette extends Component {

    state = {
        level: 500
    };

    changeLevel = (level) => {
        this.setState({
            level
        })
    };
    
    render() {
        const {level} = this.state;
        const colorBoxes = this.props.palette.colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name} />
        });

        return (
            <div className='Palette'>
                <div className='slider'>
                    <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                    />
                 </div>
                <div className="Palette-colors">
                    {colorBoxes}
                </div> 
            </div>
        )
    }
}

export default Palette
