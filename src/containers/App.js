
import React, { Component } from 'react';
import Container from "./content"
// import Container from "./image"
import Head from './components/helmet'
import ImageUpload from './ImageUpload'
import Nav from './components/nav'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from './profile'
import Loader from './loader/loader'
let fetch = require("../actions/fetcher").default;

// import Footer from './components/Footer'
// import Modal from "./components/modal"

class AppBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            services: [fetch("https://marcarita.herokuapp.com/"), fetch('https://kutekiu.herokuapp.com')]
        }
    }
    componentDidMount() {
        // ping 2 service
        Promise.all(this.state.services).then(doc => {
            this.setState({ pingDone: true }, () => {
                console.info("ping ping")
            })
        });
    }
    // showModal() {
    //     this.setState({ showModal: true });
    // }
    render() {
        if (!this.state.pingDone) return <Loader />
        else
            return (
                <BrowserRouter>
                    <div id="app">
                        <Head />
                        <Switch>
                            <Route path="/profile/:user_id" component={Profile} />
                            <Route path="/" component={Container} />
                        </Switch>
                    </div>
                </BrowserRouter>

            );
    }
}

export default AppBase;