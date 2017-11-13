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
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509850275/m12adnscbtqvythn24km.jpg" />
                    <span className="tooltiptext">Tê Nguyễn</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1510251328/tag/happy.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1508260670/k6r4igsi2yxbop1i1a07.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1507474691/public/dq9ufs6okdtmonf9evb3.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1507457086/Base/qVnz4yw.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
                <div className="friend_list_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1507457078/Base/HwfCk3f.jpg" />
                    <span className="tooltiptext">Any Girl</span>
                </div>
            </section>
        );
    }
}

export default FriendList;