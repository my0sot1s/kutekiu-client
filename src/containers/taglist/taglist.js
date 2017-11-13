import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/login'

require('./taglist.css')

class TagList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    componentDidMount() {
        if (this.props.login.data && this.props.login.meta.status === 200) {
            this.setState({ isLogin: true, info: this.props.login.data })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.data && nextProps.login.meta.status === 200)
            this.setState({ isLogin: true, info: nextProps.login.data })
    }
    render() {
        return (
            <section className="tag_list">
                <div className="tag_img_wraper">
                    <Link to={{ pathname: "/add", state: { modal: true } }}>
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                        <i className="fa fa-file-image-o" aria-hidden="true"></i>
                    </Link>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/girl.jpg" />
                    <p>Girl</p>
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
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1509370364/tag/natural.jpg" />
                    <p>Natural</p>
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
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1510251328/tag/happy.jpg" />
                    <p>Happy</p>
                </div>
                <div className="tag_img_wraper">
                    <img src="http://res.cloudinary.com/telosma/image/upload/t_media_lib_thumb/v1510251329/tag/food.jpg" />
                    <p>Foods</p>
                </div>
            </section>
        );
    }
}

export default
    connect(
        // mapStateToProps
        state => ({ login: state.login }),
        // mapDispatchToProps
        dispatch => ({ acts: bindActionCreators(actions, dispatch) })
    )(TagList);