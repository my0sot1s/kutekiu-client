import React, { Component } from 'react';
require("./header.css")
class Header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header_logo">
                    Kutekiu
                </div>
                <input className="header_search" type="text" placeholder="Search..." />
                <nav className="header_nav">
                    <ul className="header_menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Join Nơw</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;