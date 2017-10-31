import React, { Component } from 'react';
import Register from "./Register"
require("./login.css")


export default class Login extends Component {
   
    render() {
        return (
            <div >
                <form action="">
                    <div className="Login Form">
                        <h2>Login Form</h2>
                        <div className="info">
                            <input type="text" className="username" placeholder="Username" required="" />
                            <input type="password" className="password" placeholder="Password" required="" />
                        </div>
                        <div className="rem">
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
