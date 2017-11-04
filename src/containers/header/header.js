import React, { Component } from 'react';

import { Link } from 'react-router-dom';

require("./header.css")



class Header extends Component {
    render() {
        return (
            <section className="header_section">
                <section className="nav_wraper">
                    <section className="nav_own">
                        <div className="nav_avatar"></div>
                        <div className="nav_name">
                            <a id="user_name" href="#">Tể Nguyễn</a>
                        </div>
                    </section>
                </section>
                <div className="box">
                    <div className="container-3">
                        <span className="icon">
                            <i className="fa fa-search"></i>
                        </span>
                        <input type="search" id="search" placeholder="Search..." />
                    </div>
                </div>
                <section className="nav_menu">
                    <ul className="nav_ul_menu">
                        <li>
                            <Link to="/">
                                <i className="fa fa-table" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bell-o" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <Link to="/add">
                                <i class="fa fa-camera" aria-hidden="true"></i>
                            </Link>
                        </li>
                        
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{ marginLeft: 10, borderLeftWidth: 1, borderLeftColor: "#eee", color: "#fff" }}>
                                Login/Register
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="nav_options"></section>
            </section >
        );
    }
}

export default Header;