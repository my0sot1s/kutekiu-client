import React, { Component } from 'react';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/detail'
import * as actions2 from '../../actions/comment'
import Loader from '../loader/loader'
import { fly } from '../../utils/fly'
import { timeAgo } from "../../utils/timeProcess"
import { img2ava } from '../../utils/avatar'
require("./detail.css");

class DetailRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: "",
            user: {},
            post: {}, cmtList: null
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
            this.setState({
                user: nextProps.detail.data.user,
                post: nextProps.detail.data.post,
                cmtList: nextProps.comments.data
            })
        }
    }
    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {
        const { media } = this.state;
        const settings = {
            dots: true,
            // lazyLoad: true,
            infinite: true,
            // speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // vertical: true,
            // verticalSwiping: true,
            // initialSlide: 1,
        };

        if (!this.state.post.media || !this.state.cmtList) return <Loader />
        else
            return (
                <div className="img_main">
                    <div className="img_left">
                        <div className="img_wraper">
                            <Slider {...settings}
                                className="img_slide">
                                {this.state.post.media.map((value, index) => {
                                    return <div className="img_boundary" key={index}>
                                        <img src={value.url} key={index} />
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="img_comment">
                        <div className="cmt_list">
                            <div className="content_avatar">
                                <div className="content_avatar_img">
                                </div>
                                <img src={img2ava(this.state.user.avatar)} tag={this.state.user.username} />
                            </div>
                            <div className="content_user">
                                <div className="content_user_name">
                                    <p>
                                        <a href="#">{this.state.user.displayName}
                                        </a>
                                    </p>
                                </div>

                                <div className="content_user_cap">
                                    <span>{timeAgo(this.state.post.created)} ago</span></div>
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
                                return <li className="comment_item" key={index}>
                                    <div className="comment_header">
                                        {/* <div className="comment_avatar"></div> */}
                                        <img src={value.user.avatar} tag={value.user.username} className="comment_avatar" />
                                        <div className="comment_name_detail">
                                            <div className="comment_name_detail_name">
                                                <a href="">{value.user.displayName}</a>
                                            </div>
                                            <div className="comment_name_detail_date">{timeAgo(value.comment.created)} ago</div>
                                        </div>
                                        <div className="comment_options">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="comment_content">
                                        <div className="comment_content_text">
                                            {value.comment.content}
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
