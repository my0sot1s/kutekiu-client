import React, { Component } from 'react';
require("./register.css")


export default class Register extends Component {

    render() {
        return (
            <div >
                <form action="">
                    <h2>Register Form</h2>
                    <div className="info">
                        <input type="text" className="username" required="" placeholder="Username" />
                        <input type="password" className="password" required="" placeholder="Password" />
                        <input type="password" className="passwordrep" required="" placeholder="Confirm Password" />
                        <input type="text" className="email" required="" placeholder="Email" />
                        <input type="text" className="sdt" required="" placeholder="Telephone Number" />
                        <select>
                            <option>sex</option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>
                    <div className="submit">
                        <button>Submit</button>
                    </div>

                </form>
            </div>
        );
    }
}


