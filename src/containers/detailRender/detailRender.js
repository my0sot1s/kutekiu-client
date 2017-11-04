import React, { Component } from 'react';
import Slider from './detail'
import Header from '../header/header'
import Modal from '../components/modal'
export default class DetailRender extends Component {
    render() {
            return (
                <div>
                    <Header/>
                    <div class="slide_wrapper">
                        <Slider {...this.props}/>
                    </div>
                </div>
            );
    }
}

export class RenderModal extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <Modal goBack={this.goBack.bind(this)}>
                <Slider {...this.props}/>
            </Modal>
        );
    }
}