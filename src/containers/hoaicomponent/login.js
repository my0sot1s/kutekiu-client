import React, { Component } from 'react';
import Register from "./Register"
import Modal from '../components/modal'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/login'



require("./login.css")

/**
 *@author - hoannt - <hoai>
 */
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            info: {}
        }
    }
    goBack() {
        this.props.history.goBack()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.meta.status === 200 && nextProps.login.data) {
            this.setState({ isLogin: true, info: nextProps.login.data })
            this.username.value = "";
            this.password.value = "";
            setTimeout(() => {
                this.goBack();
            }, 1000)
        }
        // else if (nextProps.login.meta.status === 0 || nextProps.login.meta.status === undefined) {
        //     alert("Login first plz")
        // }
        else if (nextProps.login.meta.status === 201) {
            alert("Login not successfull")
        }
    }
    onFormSubmit(event) {
        const username = this.username.value
        const password = this.password.value
        this.props.acts.login(
            `/UserInfo/login`, username, password);
    }
    render() {
        return (
            <Modal goBack={this.goBack.bind(this)}>
                <div className="login">
                    <div className="login_form">
                        <h2>Login Form</h2>
                        <div className="login_info">
                            <input type="text" className="login_username"
                                placeholder="Username" required="" ref={username => this.username = username} />
                            <input type="password" className="login_password"
                                placeholder="Password" required="" ref={password => this.password = password} />
                        </div>
                        <div className="login_rem">
                            <button onClick={this.onFormSubmit.bind(this)} type="button">Join now</button>
                            <a href="./Register.js">Register</a>
                            <a href="">Forgot password</a>
                        </div>
                    </div>
                </div>
            </Modal>
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

