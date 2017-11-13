import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/login'
require("./header.css")



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    componentDidMount() {
        if (this.props.login.data && this.props.login.meta.status === 200) {
            this.setState({ isLogin: true, info: this.props.login.data })
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.data && nextProps.login.meta.status === 200)
            this.setState({ isLogin: true, info: nextProps.login.data })
    }

    render() {
        return (

            <section className="header_section">
                <section className="nav_wraper">
                    <section className="nav_own">
                        <div className="nav_name">
                            <Link to="/" id="user_name">
                                KiuKiu
                            </Link>
                            <span>Beautiful image</span>
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
                            <a>
                                {!this.state.info ?
                                    <div className="nav_avatar"></div> :
                                    <img src={this.state.info.avatar} className="nav_avatar" />}
                                {/*  */}

                            </a>
                        </li>
                        <li>
                            <a href="javascript:void();">
                                <i className="fa fa-table" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bell-o" aria-hidden="true"></i>
                            </a>
                        </li>
                        {this.state.isLogin ?
                            <li onClick={this.logOut.bind(this)}>
                                <a>
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                </a>
                            </li> :
                            <li>
                                <Link to={{ pathname: "/login", state: { modal: true } }}
                                    style={{ marginLeft: 10, borderLeftWidth: 1, borderLeftColor: "#eee", color: "#fff" }}>
                                    Login/Register
                            </Link>
                            </li>
                        }
                    </ul>
                </section>
                <section className="nav_options">

                </section>
            </section>
        );
    }
}
export default
    connect(
        // mapStateToProps
        state => ({ login: state.login }),
        // mapDispatchToProps
        dispatch => ({ acts: bindActionCreators(actions, dispatch) })
    )(Header)


// export default Header;