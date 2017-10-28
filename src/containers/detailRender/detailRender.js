import React, { Component } from 'react';
import Slider from './detail'

export default class DetailRender extends Component {
    render() {
            return (
                <div id="square">
                     <Slider {...this.props}/>
                </div>
            );
    }
}