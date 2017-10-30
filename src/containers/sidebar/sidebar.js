import React from 'react'
import Comment from "../comments/comment"
import Action from "../actions/actions"
import { img2ava } from '../../utils/avatar'

export default (props) => (
    <div className="sidebar">
        <div className="header_timeline">
            <div className="banner">
                <div className="banner_blur"></div>
                <img src={props.data.banner} />
            </div>
            <div className="wrap_avatar">
                <div className="avatar_border">
                    <img src={img2ava(props.data.avatar)} alt={props.data.username} />
                </div>

            </div>
            <div className="wrap_user">
                <div className="wrap_username">
                    <span>
                        <a href="#">
                            {props.data.displayName}
                        </a>
                        (...)
        </span>
                </div>
            </div>
        </div>
    </div>
)