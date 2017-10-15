import React from 'react'
require("./nav.css")

export default (props) => (
    <nav>
        <section className="nav_wraper">
            <section className="nav_own">
                <div className="nav_avatar"></div>
                <div className="nav_name">
                    <a id="user_name" href="#">Tể Nguyễn</a>
                </div>
            </section>
            <input type="text" name="" id="nav_search" placeholder="Search" />
        </section>
        <section className="nav_menu">
            <ul className="nav_ul_menu">
                <li>
                    <a href="#">
                        <i className="fa fa-table" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </section>
        <section className="post">
            <textarea name="post" autofocus id="" cols="100" rows="3" placeholder="Post some things..."></textarea>
            <div className="post_add_img">

            </div>
            <input type="button" name="" id="btn_submit" value="Đăng" />
        </section>
    </nav>
)