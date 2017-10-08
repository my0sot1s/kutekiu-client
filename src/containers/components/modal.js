import React, { Component } from 'react';
require("./modal.css")

class ModalControl extends Component {
    state = {
        isShowingModal: true,
    }
    componentDidMount() {
        // Get the modal
        // this.refs.modal.style.display = "block";
        // document.body.style = "overflow:hidden";

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal) {
            this.refs.modal.style.display = "block";
            document.body.style = "overflow:hidden";
        }

    }


    handleClose = () => {
        this.refs.modal.style.display = "none";
        document.body.style = "overflow:scroll;";
    }
    render() {
        return <div id="myModal" class="modal" ref="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={this.handleClose.bind(this)}>&times;</span>
                </div>
                <div class="modal-body">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default ModalControl;