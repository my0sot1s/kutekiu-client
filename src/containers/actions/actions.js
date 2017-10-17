import React from 'react'
require("./actions.css")

export default (props) => (
    <div className="content_action">
        <div className="content_action_access">
            <div className="action_item">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div>
            <div className="action_item">
                <i className="fa fa-random" aria-hidden="true"></i>
            </div>
            <div className="action_item">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
        </div>
    </div>
)