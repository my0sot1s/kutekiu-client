
import React, { Component } from 'react';
import Container from "./content"
// import Container from "./image"
import Head from './components/helmet'
import ImageUpload from './ImageUpload'
import Nav from './components/nav'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from './profile'
import Loader from './loader/loader'
import DetailRender from './detailRender/detailRender'
import Modal from './components/modal'
import Login from "./components/login"
let fetch = require("../actions/fetcher").freeFetch;

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
    previousLocation = this.props.location
    componentDidMount() {
        // ping 2 service
        Promise.all(this.state.services).then(doc => {
            this.setState({ pingDone: true }, () => {
                console.info("ping ping")
            })
        });
    }
    componentWillUpdate(nextProps) {
        const { location } = this.props
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location
        }
    }
    // showModal() {
    //     this.setState({ showModal: true });
    // }
    render() {
        const { location } = this.props
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location // not initial render
        )
        if (!this.state.pingDone) return <Loader />
        else
            return (
                <div id="app" >
                    <Head />
                    <Login />
                    <Switch location={isModal ? this.previousLocation : location}>
                        <Route exact path="/" component={Container} />
                        <Route path="/profile/:username" component={Profile} />
                        <Route path="/post/:post_id" component={DetailRender} />
                    </Switch>
                    {isModal ? <Route path='/post/:post_id' component={Modal} /> : null}
                </div>
            );
    }
}

export default AppBase;