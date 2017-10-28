import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/profile'
import _ from 'lodash';
import Sidebar from './sidebar/sidebar'
import Cell from './renderCell/cell'
import Loader from './loader/loader'

require("./profile.css")

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.match.params.username,
            page: 0, limit: 3,
            user: null,
            post: null
        }
    }
    /**
     * 
     * @param {number} limit 
     * @param {number} page 
     */
    fetchAction(page) {
        if (!page) page = 0;
        this.props.acts.getProfile(
            // `http://localhost:3003/api/social_post/get-post?user_id=${this.state.user_id}&limit=${this.state.limit}&page=${page}`);
            `https://kutekiu.herokuapp.com/api/social_post/get-user-post?username=${this.state.username}&limit=${this.state.limit}&page=${page}`);
    }
    componentDidMount() {
        // https://kutekiu.herokuapp.com/api/social_post/get-post?user_id=18&limit=5
        this.fetchAction()
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.profile.data.user,
            post: nextProps.profile.data.data
        })
    }

    render() {
        if (!this.state.user) return <Loader />
        return (
            <div class="container">
                <Sidebar data={this.state.user} />
                <div className="content2">
                    {this.state.post.map(post => {
                        return <Cell data={{
                            post: post.post,
                            like: post.like,
                            comment: post.comment,
                            user: this.state.user
                        }} />
                    })}
                </div>
            </div>
        );
    }
}

export default
    connect(
        // mapStateToProps
        state => ({ profile: state.profile }),
        // mapDispatchToProps
        dispatch => ({ acts: bindActionCreators(actions, dispatch) })
    )(Profile)