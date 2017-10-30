import React, { Component } from 'react';
import { timeAgo } from "../../utils/timeProcess"
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/comment'
import _ from "lodash"
require("./comment.css")

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            _comment: []
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
                    if (len === 0 || len === 1)
                        this.setState({ _comment: { data: nextProps.commentReducer.data, user } })
                    else {
                        let comment = nextProps.comment;
                        comment[1] = _.clone(comment[0]);
                        comment[0].data = nextProps.commentReducer.data;
                        comment[0].user = user;
                        this.setState({ _comment: comment })
                    }
                    break;
                }
                else continue;
            }
        }
        else this.setState({ value: null })
    }
    render() {
        return (
            <ul className="content_comment">
                <li>
                    <span>
                        <input type="text" placeholder="Nhập comment..."
                            ref={cmt => this.cmt = cmt}
                            onKeyPress={this._handleKeyPress.bind(this)} />
                        <a onClick={this.sendComment.bind(this)}>
                            <i className="fa fa-telegram" aria-hidden="true"></i>
                        </a>
                    </span>
                </li>
                {this.state._comment.map((v, i) => {
                    return (<li className="comment_item" key={i}>
                        <div className="comment_header">
                            {/* <div className="comment_avatar"></div> */}
                            <img src={v.user.avatar} />
                            <div className="comment_name_detail">
                                <div className="comment_name_detail_name">
                                    <Link to={`/profile/${v.user.username}`}>{v.user.displayName}</Link>
                                </div>
                                <div className="comment_name_detail_date">{timeAgo(v.data.created)} ago</div>
                            </div>
                            <div className="comment_content2">
                                {v.data.content}
                            </div>
                            <div className="comment_options">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>)
                })}
                <li>
                    <a href="#">View more comment...</a>
                </li>
            </ul>
        );
    }
}

// export default Comments;

export default connect(
    // mapStateToProps
    state => ({ commentReducer: state.commentReducer, login: state.login }),
    // mapDispatchToProps
    dispatch => ({ acts: bindActionCreators(actions, dispatch) })
)(Comments)

// export default (props) => (
//     <ul className="content_comment">
//         <li>
//             <span>
//                 <input type="text" placeholder="Nhập comment..." />
//                 <a href="#">
//                     <i className="fa fa-telegram" aria-hidden="true"></i>
//                 </a>
//             </span>
//         </li>
//         {props.comment.map((v, i) => {
//             return (<li className="comment_item" key={i}>
//                 <div className="comment_header">
//                     {/* <div className="comment_avatar"></div> */}
//                     <img src={v.user.avatar} />
//                     <div className="comment_name_detail">
//                         <div className="comment_name_detail_name">
//                             <Link to={`/profile/${v.user.username}`}>{v.user.displayName}</Link>
//                         </div>
//                         <div className="comment_name_detail_date">{timeAgo(v.data.created)} ago</div>
//                     </div>
//                     <div className="comment_content2">
//                         {v.data.content}
//                     </div>
//                     <div className="comment_options">
//                         <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                     </div>
//                 </div>
//                 {/* <div className="comment_content">
//                     <div className="comment_content_text">
//                         {v.data.content}
//                     </div>
//                 </div> */}
//             </li>)
//         })}
//         {/* <li className="comment_item">
//             <div className="comment_header">
//                 <div className="comment_avatar"></div>
//                 <div className="comment_name_detail">
//                     <div className="comment_name_detail_name">
//                         <a href="">Cương Nguyễn</a>
//                     </div>
//                     <div className="comment_name_detail_date">1 min ago</div>
//                 </div>
//                 <div className="comment_options">
//                     <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                 </div>
//             </div>
//             <div className="comment_content">
//                 <div className="comment_content_text">
//                     Video hay quá !!! :3
//                             </div>
//             </div>
//         </li>
//         <li className="comment_item">
//             <div className="comment_header">
//                 <div className="comment_avatar"></div>
//                 <div className="comment_name_detail">
//                     <div className="comment_name_detail_name">
//                         <a href="">Hoàng Hiệp</a>
//                     </div>
//                     <div className="comment_name_detail_date">1 h ago</div>
//                 </div>
//                 <div className="comment_options">
//                     <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                 </div>
//             </div>
//             <div className="comment_content">
//                 <div className="comment_content_text">
//                     <span>
//                         ảnh đẹp quá hihi
//                                     <a href="#"> ...more</a>
//                     </span>
//                 </div>
//             </div>
//         </li> */}
//         <li>
//             <a href="#">View more comment...</a>
//         </li>
//     </ul>
// )