import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/comment'
import * as actionLike from '../../actions/actionLike'
import _ from "lodash"

require("./actions.css")

class ActionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLike: this.props.liked || false,
            unlike: "#7c7c7c",
            like: "#f44277",
            like_icon: "fa fa-heart-o",
            like_icon2: "fa fa-heart"
        }
    }
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.sendComment()
        } else return;
    }
    componentDidMount() {
        this.setState({ _comment: this.props.comment })
    }

    sendComment() {
        let comment = this.cmt.value
            , access_token = this.props.login.data.access_token
            , user_id = this.props.login.data.id
            , post_id = this.props.post_id;
        if (comment || comment.trim() !== "") {
            // xóa bỏ kí tự đặc biệt
            comment = comment.replace(/[\'\"\>\<\*\%\[\]]/g, '*');
            if (!access_token || typeof access_token !== "string") alert("Login first!!")
            else this.props.acts.postComment(
                `/social_comments/add-comment?access_token=${access_token}`, user_id, post_id, comment);
            this.cmt.value = "";
        } else {
            this.cmt.value = "";
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.commentReducer.meta.status === 200 && nextProps.login.data) {
            var len = nextProps.comment.length,
                _userData = _.clone(nextProps.login.data),
                user = {
                    displayName: _userData.displayName,
                    avatar: _userData.avatar
                };
            for (var i = 0; i < len; i++) {
                if (nextProps.comment[i].data.post_id === nextProps.commentReducer.data.post_id) {
                    // if (len === 0 || len === 1)
                    //     this.setState({ _comment: { data: nextProps.commentReducer.data, user } })
                    // else {
                    //     let comment = nextProps.comment;
                    //     comment[1] = _.clone(comment[0]);
                    //     comment[0].data = nextProps.commentReducer.data;
                    //     comment[0].user = user;
                    //     this.setState({ _comment: comment })
                    // }
                    // break;
                    this.setState({ _comment: { data: nextProps.commentReducer.data, user } })
                    break;
                }
                else continue;
            }
        }
        else this.setState({ value: null })
    }
    render() {
        const { isLike } = this.state;
        return <div className="content_action2">
            <div className="content_action_access2">
                <div className="action_item2">
                    <a onClick={this.clickAction.bind(this, 1)}><i className={isLike ? this.state.like_icon2 : this.state.like_icon}
                        aria-hidden="true"
                        style={{ color: isLike ? this.state.like : this.state.unlike }}></i>
                    </a>
                </div>
                <div className="action_item2">
                    <a onClick={this.clickAction.bind(this, 2)}>
                        <i className="fa fa-random" aria-hidden="true"></i>
                    </a>
                </div>
                <span>
                    <input type="text" placeholder="Nhập comment..." ref={cmt => this.cmt = cmt}
                        onKeyPress={this._handleKeyPress.bind(this)} />
                    <a href="#">
                        <i className="fa fa-telegram" aria-hidden="true" onClick={this.sendComment.bind(this)}
                            style={{ color: isLike ? this.state.like : this.state.unlike }}></i>
                    </a>
                </span>
                <div className="content_count2">
                    <p>{this.props.like}<i className="fa fa-heart-o" aria-hidden="true"></i>
                        {this.props.comment}<i className="fa fa-random" aria-hidden="true"></i>
                    </p>
                </div>
            </div>
        </div>
    }
}
export default connect(
    // mapStateToProps
    state => ({
        commentReducer: state.commentReducer,
        login: state.login,
        actionLike: state.actionLike
    }),
    // mapDispatchToProps
    dispatch => ({ acts: bindActionCreators(actions, dispatch) })
)(ActionComponent)
// export default ActionComponent;