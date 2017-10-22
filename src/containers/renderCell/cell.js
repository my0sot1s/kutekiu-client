import React from 'react'

import Comment from "../comments/comment"
import Action from "../actions/actions"
import { timeAgo } from "../../utils/timeProcess"
import { BrowserRouter, Route, Link } from 'react-router-dom';

require("./cell.css")

export default (props) => (
    <div className="content_item">
        <div className="content_avatar">
            <div className="content_avatar_img"> </div>
            <img src={props.data.user.avatar} tag={props.data.user.username} />
        </div>
        <div className="content_user">
            <div className="content_user_name">
                <p>
                    {/* <a href="#">{props.data.user.displayName}</a> */}
                    <Link to={`/profile/${props.data.post.user_id}`}>{props.data.user.displayName}</Link>
                    <span>- {timeAgo(props.data.post.created)} ago</span>
                </p>
            </div>

            <div className="content_user_cap">
                {props.data.post.post_content}
            </div>
        </div>
        <div className="main_content">
            <div className="content_img">
                {props.data.post.media.map(med => {
                    return <img src={med.url} alt={med.public_id} />
                })}
            </div>
            <div className="content_count">
                <p>{props.data.like} loves {props.data.comment.count} comments</p>
            </div>
            <Action />
            <Comment comment={props.data.comment.cmt} />
        </div>
    </div >
)