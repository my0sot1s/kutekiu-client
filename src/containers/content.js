import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/timeline'
import Cell from './renderCell/cell'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Loader from './loader/loader'
import ImageUpload from './ImageUpload'
// import Loader from './components/loader'
import _ from 'lodash';
// import Modal from "./components/modal"
require("./content.css")

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbLeft: [],
            tbRight: [],
            page: 1, limit: 4,
            doUpdate: false,
            // date: new Date()
        }
    }
    /**
     * 
     * @param {number} limit 
     * @param {number} page 
     */
    fetchAction(page) {
        if (!page) page = 1;
        this.props.acts.getTimeline(
            `https://kutekiu.herokuapp.com/api/social_timelines/getTimeLine?limit=${this.state.limit}&page=${page}`);
        // `http://localhost:3003/api/social_timelines/getTimeLine?limit=${this.state.limit}&page=${page}&date=${this.state.date.toDateString()}`);
    }
    componentDidMount() {
        this.fetchAction()
        // window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(e) {
        var scrollTop = document.documentElement.scrollTop,
            scrollHeight = document.documentElement.scrollHeight,
            possion = scrollHeight - document.documentElement.clientHeight;
        if (scrollTop / possion > 0.75 && !this.state.doUpdate) {
            this.setState((prevState) => ({
                page: prevState.page + 1,
                doUpdate: true,
                // showModal: false
            }), () => {
                this.fetchAction(this.state.page);
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.timeline.meta.status === 201) {
            console.log("False fetch server")
        }
        else if (nextProps.timeline.meta.status === 200 && nextProps.timeline.data.length === 0) {
            this.setState(prevState => {
                let curd = new Date(prevState.date);
                curd.setDate(curd.getDate() - 1)
                return {
                    date: curd
                }
            }, () => {
                this.fetchAction(this.state.page)
            })
        }
        else {
            let _d = nextProps.timeline.data, tbLeft = [], tbRight = []
            for (var i = 0; i < _d.length; i++) {
                if (i % 2 === 0) tbLeft.push(_d[i])
                else tbRight.push(_d[i])
            }
            this.setState({ tbLeft, tbRight })
        }

    }

    render() {
        if (this.state.tbLeft.length === 0)
            return <Loader />
        else
            return (
                <div>
                    <ImageUpload />
                    <div className="container" >

                        <div className="content">
                            {this.state.tbLeft.map((value, index) => {
                                return <Cell data={value} />
                            })}
                        </div>
                        <div className="content">
                            {this.state.tbRight.map((value, index) => {
                                return <Cell data={value} />
                            })}
                        </div>
                    </div >
                </div>
            );
    }
}
export default connect(
    // mapStateToProps
    state => ({ timeline: state.timeline }),
    // mapDispatchToProps
    dispatch => ({ acts: bindActionCreators(actions, dispatch) })
)(Content)
