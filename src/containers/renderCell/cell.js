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
                    <Link to={{
                        pathname: `/profile/${props.data.user.username}`,

                    }}>{props.data.user.displayName}</Link>
                    <span>- {timeAgo(props.data.post.created)} ago</span>
                </p>
            </div>

            <div className="content_user_cap">
                {props.data.post.post_content}
            </div>
        </div>
        <div className="main_content">
            <Link to={{ pathname: `/post/${props.data.post.id}`, state: { modal: true } }}>
                <div className="content_img" >
                    {props.data.post.media.map((med, key) => {
                        return <img src={med.url} alt={med.public_id} key={key} />
                    })}
                </div>
            </Link>
            <div className="content_count">
                <p>{props.data.like} loves {props.data.comment.count} comments</p>
            </div>
            <Action post_id={props.data.post.id}/>
            <Comment comment={props.data.comment.cmt} post_id={props.data.post.id} />
        </div>
    </div >
)