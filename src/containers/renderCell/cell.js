import React from 'react'

import Comment from "../comments/comment"
import Action from "../actions/actions"
import {timeAgo} from "../../utils/timeProcess"
import { Link} from 'react-router-dom';
import {img2ava} from '../../utils/avatar'
import Slider from 'react-slick'

require("./cell.css")
let settings = {
    className: 'abc',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true
}

class Celler extends React.PureComponent {
    constructor(props) {
        super(props)
        this.openPopup=this.openPopup.bind(this)
    }
    openPopup() {
       this.props.history.push({pathname: `/post/${this.props.data.post.id}`, state: {modal: true}});
    }

    render() {
        return (
            <div className="content_item">
                <div className="content_avatar">
                    <div className="content_avatar_img"></div>
                    <img src={img2ava(this.props.data.user.avatar)} tag={this.props.data.user.username}/>
                </div>
                <div className="content_user">
                    <div className="content_user_name">
                        <p>
                            <Link to={{
                                pathname: `/profile/${this.props.data.user.username}`,

                            }}>{this.props.data.user.displayName}</Link>
                            <span>- {timeAgo(this.props.data.post.created)} ago</span>
                        </p>
                    </div>

                    <div className="content_user_cap">
                        {this.props.data.post.post_content}
                    </div>
                </div>

                <div className="main_content">
                    {/*<Link to={{ pathname: `/post/${props.data.post.id}`, state: { modal: true } }}>*/}
                    <a href="javascript:void(0);"
                       onDoubleClick={this.openPopup}
                       onClick={(e)=>e.preventDefault()}>
                        <div className="content_img">
                            <Slider {...settings}>
                                {/*{how2render(props.data.post.media)} */}
                                {/*{pushToCell(props.data.post.media)} */}
                                {this.props.data.post.media.map((med, key) => {
                                    return <img src={med.url}
                                                alt={med.public_id}
                                                key={key}
                                                onClick={(e)=>e.preventDefault()}
                                                draggable="false"
                                                style="-moz-user-select: none;"
                                    />
                                })}
                            </Slider>
                        </div>
                    </a>

                    {/*</Link>*/}
                    {/* <div className="content_count">
                <p>{props.data.like} loves {props.data.comment.count} comments</p>
            </div> */}
                    <Action post_id={this.props.data.post.id}
                            like={this.props.data.like}
                            comment={this.props.data.comment.count}
                            liked={this.props.data.liked}/>
                    <div className="content_user_cap">
                        {this.props.data.post.post_content}
                    </div>
                    <Comment comment={this.props.data.comment.cmt}
                             post_id={this.props.data.post.id}/>

                </div>
            </div>
        );
    }
}


export default Celler;


// export default (props) => (
//
// )