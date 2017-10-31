import React, { Component } from 'react';
require('./taglist.css')
class TagList extends Component {
    render() {
        return (
            <section className="tag_list">
                <div className="tag_img_wraper">
                    <h4>Most popular</h4>
                </div>

                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <p>Girl</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/natural.jpg" />
                    <p>Natural</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370363/tag/boy.jpg" />
                    <p>Boy</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370362/tag/love.jpg" />
                    <p>Love</p>
                </div>

                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/computer.png" />
                    <p>Computer</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370363/tag/flower.jpg" />
                    <p>Flower</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370362/tag/baby.jpg" />
                    <p>Baby</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370363/tag/party.jpg" />
                    <p>Party</p>
                </div>
            </section>
        );
    }
}

export default TagList;