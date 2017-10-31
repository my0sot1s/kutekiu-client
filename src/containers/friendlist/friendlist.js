import React, { Component } from 'react';
require('./friendlist.css')
class FriendList extends Component {
    render() {
        return (
            <section className="friend_list">
                <div className="friend_list_wraper">
                    <h5>Following</h5>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <p>Tê Nguyễn</p>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <p>Girl</p>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <p>Girl</p>
                </div>
            </section>
        );
    }
}

export default FriendList;