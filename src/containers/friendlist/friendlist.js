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
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/computer.png" />
                    <span className="tooltiptext">Tê Nguyễn</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370363/tag/boy.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1510251328/tag/happy.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370362/tag/love.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
            </section>
        );
    }
}

export default FriendList;