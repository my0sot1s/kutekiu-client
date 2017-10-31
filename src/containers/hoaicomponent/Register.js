import React, { Component } from 'react';
require("./register.css")


export default class Register extends Component {

    render() {
        return (
            <div className="register" >
                <form action="">
                    <h2>Register Form</h2>
                    <div className="register_info">
                        <input type="text" className="register_username" required="" placeholder="Username" />
                        <input type="password" className="register_password" required="" placeholder="Password" />
                        <input type="password" className="register_passwordrep" required="" placeholder="Confirm Password" />
                        <input type="text" className="register_email" required="" placeholder="Email" />
                        <input type="text" className="register_sdt" required="" placeholder="Telephone Number" />
                        <select>
                            <option>sex</option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>
                    <div className="register_submit">
                        <button>Submit</button>
                    </div>

                </form>
            </div>
        );
    }
}


