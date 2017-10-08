import React, { Component } from 'react';
require("./footer.css")
class Fooder extends Component {
    render() {
        return (
            <div className="footer">
                <i class="fa fa-camera-retro" aria-hidden="true" onClick={this.props.showModal}></i>
            </div>
        );
    }
}

export default Fooder;