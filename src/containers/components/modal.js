import React, { Component } from 'react';
import DetailPost from '../detailRender/detail'
require("./modal.css")

class ModalControl extends Component {
    state = {
        isShowingModal: true,
    }
    componentDidMount() {
        // Get the modal
        this.refs.modal.style.display = "block";
        document.body.style = "overflow:hidden";

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal) {
            this.refs.modal.style.display = "block";
            document.body.style = "overflow:hidden";
        }
    }
    back = (e) => {
        e.stopPropagation()
        this.props.history.goBack()
    }

    handleClose = (e) => {
        this.refs.modal.style.display = "none";
        document.body.style = "overflow:scroll;";
        this.back(e)
    }
    render() {
        return <div id="myModal" className="modal" ref="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={this.handleClose.bind(this)}>&times;</span>
                </div>
                <div className="modal-body">
                    <DetailPost {...this.props}/>
                </div>
            </div>
        </div>
    }
}

export default ModalControl;