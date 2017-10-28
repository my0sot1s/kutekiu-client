import React, { Component } from 'react';
require("./actions.css")

class ActionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLike: false,
            unlike: "#7c7c7c",
            like: "#f44277",
            like_icon: "fa fa-heart-o",
            like_icon2: "fa fa-heart"
        }
    }
    clickAction(num) {
        switch (num) {
            case 1: {
                this.setState(prevState => {
                    return { isLike: !prevState.isLike }
                })
                return;
            }
            case 2: {
                alert("show all Comment/ Chưa phát triển")
                return;
            }
            case 3: {
                alert("Options/ Chưa phát triển")
                return;
            }
        }
    }
    render() {
        const { isLike } = this.state;
        return (
            <div className="content_action">
                <div className="content_action_access">
                    <div className="action_item">
                        <a onClick={this.clickAction.bind(this, 1)}>
                            <i className={isLike ? this.state.like_icon2 : this.state.like_icon}
                                aria-hidden="true"
                                style={{ color: isLike ? this.state.like : this.state.unlike }}></i>
                            <span>Love</span>
                        </a>
                        <span style={{ marginLeft: 1, fontSize: 15 }}>{isLike ? "+1" : ""}</span>
                    </div>
                    <div className="action_item">
                        <a onClick={this.clickAction.bind(this, 2)}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            <span>Comment</span>
                        </a>
                    </div>
                    <div className="action_item">
                        <a onClick={this.clickAction.bind(this, 3)}>
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionComponent;