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
        if (nextProps.login.meta.status === 200 && nextProps.login.data) {
            this.setState({ isLogin: true, info: nextProps.login.data })
            this.username.value = "";
            this.password.value = "";
        }
        // else if (nextProps.login.meta.status === 0 || nextProps.login.meta.status === undefined) {
        //     alert("Login first plz")
        // }
        else if (nextProps.login.meta.status === 201) {
            alert("Login not successfull")
        }
    }
    logOut() {
        if (this.props.login.data.access_token) {
            debugger
            this.setState({ isLogin: false }, () => {
                this.props.acts.logout(
                    `/UserInfo/logout?access_token=${this.props.login.data.access_token}`);
            })
        }

    }
    render() {
        const { isLogin } = this.state;
        return (
            <div>
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
                <center style={{ display: isLogin ? "block" : "none" }}>
                    <button onClick={this.logOut.bind(this)}>Logout</button>
                </center>
            </div>

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
