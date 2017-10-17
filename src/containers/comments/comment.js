import React from 'react'
require("./comment.css")

export default (props) => (
    <ul className="content_comment">
        <li>
            <span>
                <input type="text" placeholder="Nhập comment..." />
                <a href="#">
                    <i className="fa fa-telegram" aria-hidden="true"></i>
                </a>
            </span>
        </li>
        <li className="comment_item">
            <div className="comment_header">
                <div className="comment_avatar"></div>
                <div className="comment_name_detail">
                    <div className="comment_name_detail_name">
                        <a href="">Cương Nguyễn</a>
                    </div>
                    <div className="comment_name_detail_date">1 min ago</div>
                </div>
                <div className="comment_options">
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
            </div>
            <div className="comment_content">
                <div className="comment_content_text">
                    Video hay quá !!! :3
                            </div>
            </div>
        </li>
        <li className="comment_item">
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
        </li>
        <li>
            <a href="#">View more ...</a>
        </li>
    </ul>
)