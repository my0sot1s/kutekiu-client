import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/detail'
import * as actions2 from '../../actions/comment'
import Loader from '../loader/loader'
import { fly } from '../../utils/fly'
import { timeAgo } from "../../utils/timeProcess"
import { img2ava } from '../../utils/avatar'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

require("./merge.css");


var slideIndex = 1;

class DetailRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: "",
            user: {},
            post: { media: [] }, cmtList: null,
            slideIndex: 1,
            isDone: false,
        }
    }
    /**
     * 
     * @param {number} limit 
     * @param {number} page 
     */
    fetchAction() {
        Promise.all([
            this.props.acts.getDetail(
                // `http://localhost:3003/api/social_post/get-post?user_id=${this.state.user_id}&limit=${this.state.limit}&page=${page}`);
                `/social_post/get-post-by-id?post_id=${this.state.post_id}`),
            this.props.acts.getComments(
                // `http://localhost:3003/api/social_post/get-post?user_id=${this.state.user_id}&limit=${this.state.limit}&page=${page}`);
                `/social_comments/all-comments?post_id=${this.state.post_id}`),
        ])

    }
    componentDidMount() {
        this.setState({ post_id: this.props.match.params.post_id }, () => {
            this.fetchAction()
        })
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ media: nextProps.media })
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.detail.meta.status === 200 && nextProps.comments.meta.status === 200) {
            if (this.state.isDone) {
                this.setState({ isDone: false }, () => {
                    this.showSlides(this.state.slideIndex);
                })
            }
            this.setState({
                user: nextProps.detail.data.user,
                post: nextProps.detail.data.post,
                cmtList: nextProps.comments.data.slice(0, 8),
                isDone: true
            }, () => { this.showSlides(this.state.slideIndex); })
        }

    }
    plusSlides(n) {
        this.showSlides(this.state.slideIndex + n);
    }
    currentSlide(n) {
        this.showSlides(n);
    }
    showSlides(n) {
        var i, document = ReactDOM.findDOMNode(this);
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot")
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active"; 
        if (n - 1 === slides.length) n = 1;
        if (n === 0) n = slides.length;
        this.refs['mySlides' + n].style.display = "block";
        this.refs['dots' + n].className += " active";
        this.setState({ slideIndex: n })
    }
    render() {
        const { media } = this.state;
        if (!this.state.post.media || !this.state.cmtList || !this.state.isDone) return <Loader />
        else
            return (
                <div className="slideshow">
                    <div className="slideshow-container">
                        {this.state.post.media.map((value, index) =>
                            <div className="mySlides fade" ref={`mySlides${index + 1}`} key={index}>
                                <div className="numbertext">{index + 1} / {this.state.post.media.length}</div>
                                <div className="slideimage_wrapper">
                                    <img src={value.url} />
                                </div>
                                <div className="text">Caption Text</div>
                            </div>
                        )}
                        <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                        <div className="slide_dot" style={{ textAlign: 'center' }}>

                            {this.state.post.media.map((value, index) => {
                                return <span className="dot" ref={`dots${index + 1}`} key={index}
                                    onClick={() => this.currentSlide(`${index + 1}`)}></span>
                            })}
                        </div>
                    </div>
                    <div className="slideshow_comment">
                        <div className="img_comment">
                            <div className="cmt_list">
                                <div className="content_avatar">
                                    {/* <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1508249694/public/15622472_1030514373720458_1346459383963009368_n.jpg"
                                    tag="" /> */}
                                    {<img src={img2ava(this.state.user.avatar)} tag={this.state.user.username} />}
                                </div>
                                <div className="content_user">
                                    <div className="content_user_name">
                                        <p>
                                            <Link to={`/profile/${this.state.user.username}`}>
                                                {this.state.user.displayName}
                                            </Link>
                                        </p>
                                    </div>

                                    <div className="content_user_cap">
                                        <span>{timeAgo(this.state.post.created)} ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cmt_captions">
                                {this.state.post.post_content}
                            </div>
                            <ul className="content_comment">
                                <li>
                                    <span>
                                        <input type="text" placeholder="Nhập comment..." />
                                        <a href="#">
                                            <i className="fa fa-telegram" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                {this.state.cmtList.map((value, index) => {
                                    return <li className="comment_item">
                                        <div className="comment_header">
                                            {/* <div className="comment_avatar"></div> */}
                                            <img src={value.user.avatar} tag={value.user.username} className="comment_avatar" />
                                            <div className="comment_name_detail">
                                                <div className="comment_name_detail_name">
                                                    <Link to={`/profile/${value.user.username}`}>
                                                        {value.user.displayName}
                                                    </Link>
                                                </div>
                                                <div className="comment_name_detail_date">{timeAgo(value.comment.created)} ago</div>
                                            </div>
                                            <div className="comment_content2">
                                                <span>
                                                    {value.comment.content}
                                                </span>
                                            </div>
                                            <div className="comment_options">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                })}

                                {/* <li className="comment_item">
                                <div className="comment_header">
                                    <div className="comment_avatar"></div>
                                    <div className="comment_name_detail">
                                        <div className="comment_name_detail_name">
                                            <a href="">Hoàng Hiệp</a>
                                        </div>
                                        <div className="comment_name_detail_date">1 h ago</div>
                                    </div>
                                    <div className="comment_options">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="comment_content">
                                    <div className="comment_content_text">
                                        <span>
                                            ảnh đẹp quá hihi
                                            <a href="#"> ...more</a>
                                        </span>
                                    </div>
                                </div>
                            </li> */}
                                <li>
                                    <a href="#">View more comment...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
    }
}
export default
    connect(
        // mapStateToProps
        state => ({ detail: state.detail, comments: state.commentReducer }),
        // mapDispatchToProps
        dispatch => ({ acts: bindActionCreators({ ...actions, ...actions2 }, dispatch) })
    )(DetailRender)
