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
import Modal from "./components/modal"

import DetailRender from './detailRender/detailRender'
require("./content.css")

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbLeft: [],
            tbRight: [],
            page: 1, limit: 4,
            dofetch: false,
            curMedia: [],
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
            `/social_timelines/getTimeLine?limit=${this.state.limit}&page=${page}`);
        // `http://localhost:3003/api/social_timelines/getTimeLine?limit=${this.state.limit}&page=${page}&date=${this.state.date.toDateString()}`);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.setState({ dofetch: true }, () => {
            this.fetchAction()
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(e) {
        var scrollTop = document.documentElement.scrollTop,
            scrollHeight = document.documentElement.scrollHeight,
            possion = scrollHeight - document.documentElement.clientHeight;
        if (scrollTop / possion > 0.7 && !this.state.dofetch && !this.state.endOfData) {
            this.setState((prevState) => ({
                page: prevState.page + 1,
                dofetch: true
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
        else if (this.state.dofetch) {
            //render lần đầu tiên
            if (nextProps.timeline.data.length === 0) this.setState({ endOfData: true })
            else {
                let tbLeft = [], tbRight = []
                nextProps.timeline.data.map((value, index) => {
                    if (index % 2 === 0) tbLeft.push(value)
                    else tbRight.push(value)
                })
                this.setState(prevState => {
                    if (prevState.tbLeft.length > 0) {
                        return {
                            tbLeft: [...prevState.tbLeft, ...tbLeft],
                            tbRight: [...prevState.tbRight, ...tbRight],
                            dofetch: false
                        }
                    }
                    else {
                        return { tbLeft, tbRight, dofetch: false }
                    }
                })
            }
        } else return;
    }
    // openModal(media) {
    //     this.setState({ isShowModel: true, curMedia: media })
    // }
    render() {
        if (this.state.tbLeft.length === 0)
            return <Loader />
        else
            return (
                <div>
                    {/* <ImageUpload /> */}
                    <div id="square">
                        <div className="container" >
                            <div className="content">
                                {this.state.tbLeft.map((value, index) => {
                                    return <Cell data={value} key={index} />
                                })}
                            </div>
                            <div className="content">
                                {this.state.tbRight.map((value, index) => {
                                    return <Cell data={value} key={index} />
                                })}
                            </div>
                        </div>
                        {/* <Modal showModal={this.state.isShowModel}>
                        <DetailRender media={this.state.curMedia} />
                    </Modal> */}
                    </div>
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
