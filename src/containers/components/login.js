import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/login'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            info: {}
        }
    }
    onFormSubmit(event) {
        const username = this.username.value
        const password = this.password.value
        this.props.acts.login(
            `/UserInfo/login`, username, password);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.meta.status === 200) {
            this.setState({ isLogin: true, info: nextProps.login.data })
        } else if (nextProps.login.meta.status) {
            alert("Login false")
        }
    }

    render() {
        const { isLogin } = this.state;
        return (
            <center style={{ marginTop: 10, marginBottom: 10 }} style={{ display: isLogin ? "none" : "block" }}>
                <label htmlFor="username">Username:</label>
                <input type="text" ref={username => this.username = username}
                    name="username" style={{ height: 20 }} />
                <label htmlFor="password">Password:</label>
                <input type="password" ref={password => this.password = password}
                    name="password" style={{ height: 20 }} />
                <button onClick={this.onFormSubmit.bind(this)}>
                    Login
                    </button>
                <code><i>   user:`guest` password:`guest`</i></code>
            </center>
        );
    }
}
export default
    connect(
        // mapStateToProps
        state => ({ login: state.login }),
        // mapDispatchToProps
        dispatch => ({ acts: bindActionCreators(actions, dispatch) })
    )(Login)
