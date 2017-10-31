import React, { Component } from 'react';
import Register from "./Register"
require("./login.css")


export default class Login extends Component {
   
    render() {
        return (
            <div className="login">
                <form action="">
                    <div>
                        <h2>Login Form</h2>
                        <div className="login_info">
                            <input type="text" className="login_username" placeholder="Username" required="" />
                            <input type="password" className="login_password" placeholder="Password" required="" />
                        </div>
                        <div className="login_rem">
                            <button>Submit</button>
                            <a href="./Register.js">Register</a>
                            <a href="">Forgot password</a>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
