import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
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
               <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div> 
            </div>
        )
    }
}

export default Palette
