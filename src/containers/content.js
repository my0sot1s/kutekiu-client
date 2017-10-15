import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/image'
import Loader from './components/loader'
import _ from 'lodash';
// import Modal from "./components/modal"
require("./content.css")


class Content extends Component {
    render() {
        return (
            <div class="container">
                <div class="content">
                    <div class="content_item">
                        <div class="content_avatar">
                            <div class="content_avatar_img">
                            </div>
                        </div>
                        <div class="content_user">
                            <div class="content_user_name">
                                <a href="#">Mạnh Tể</a>
                            </div>
                            <div class="content_user_date">1 min ago
                        </div>
                        </div>
                        <div class="content_img">
                            <img src="https://i.imgur.com/UciaRkK.jpg" alt="" />
                            <img src="https://i.imgur.com/4YZBgSH.jpg" alt="" />
                            <img src="https://i.imgur.com/nyKmwNC.jpg" alt="" />
                        </div>
                        <div class="content_action">
                            <div class="content_action_access">
                                <div class="action_item">
                                    <a href="#">
                                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="action_item">
                                    <a href="#">
                                        <i class="fa fa-random" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="action_item">
                                    <a href="">
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <ul class="content_comment">
                            <li>
                                <input type="text" placeholder="Nhập comment..." />
                            </li>
                            <li class="comment_item">
                                <div class="comment_header">
                                    <div class="comment_avatar"></div>
                                    <div class="comment_name_detail">
                                        <div class="comment_name_detail_name">
                                            <a href="">Minh Hoài</a>
                                        </div>
                                        <div class="comment_name_detail_date">1 min ago</div>
                                    </div>
                                    <div class="comment_options">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="comment_content">
                                    <div class="comment_content_text">
                                        Lâu lâu mới lại leo núi :v #hongha
                                </div>
                                </div>
                            </li>
                            <li class="comment_item">
                                <div class="comment_header">
                                    <div class="comment_avatar"></div>
                                    <div class="comment_name_detail">
                                        <div class="comment_name_detail_name">
                                            <a href="">Hoàng Hiệp</a>
                                        </div>
                                        <div class="comment_name_detail_date">1 h ago</div>
                                    </div>
                                    <div class="comment_options">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="comment_content">
                                    <div class="comment_content_text">
                                        ảnh đẹp quá
                                    <span>
                                            <a href="#">...more</a>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">View more ...</a>
                            </li>
                        </ul>
                    </div>
                    <div class="content_item">
                        <div class="content_avatar">
                            <div class="content_avatar_img">
                            </div>
                        </div>
                        <div class="content_user">Mạnh Tể 2</div>
                        <div class="content_img">
                            <img src="https://i.imgur.com/kr0zUry.jpg" alt="" />
                        </div>
                        <div class="content_action">
                            <div class="content_action_access">
                                <div class="action_item">
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-random" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content_item">
                        <div class="content_avatar">
                            <div class="content_avatar_img">
                            </div>
                        </div>
                        <div class="content_user">Mạnh Tể 3</div>
                        <div class="content_img">
                            <img src="https://i.imgur.com/82RIhi2.jpg" alt="" />
                        </div>
                        <div class="content_action">
                            <div class="content_action_access">
                                <div class="action_item">
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-random" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_item">
                        <div class="content_avatar">
                            <div class="content_avatar_img">
                            </div>
                        </div>
                        <div class="content_user">Mạnh Tể 4</div>
                        <div class="content_img">
                            <img src="https://i.imgur.com/v6Tj8Ee.jpg" alt="" />
                        </div>
                        <div class="content_action">
                            <div class="content_action_access">
                                <div class="action_item">
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-random" aria-hidden="true"></i>
                                </div>
                                <div class="action_item">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content
