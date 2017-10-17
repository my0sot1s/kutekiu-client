import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/timeline'
import Cell from './renderCell/cell'
// import Loader from './components/loader'
import _ from 'lodash';
// import Modal from "./components/modal"
require("./content.css")


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbLeft: [],
            tbRight: []
        }
    }
    componentDidMount() {
        this.props.acts.getTimeline(
            `https://kutekiu.herokuapp.com/api/social_timelines/getTimeLine?limit=6&page=1`);
    }
    componentWillReceiveProps(nextProps) {
        let _d = nextProps.timeline.data, tbLeft = [], tbRight = []
        for (var i = 0; i < _d.length; i++) {
            if (i % 2 === 0) tbLeft.push(_d[i])
            else tbRight.push(_d[i])
        }
        this.setState({ tbLeft, tbRight })
    }

    render() {
        if (this.state.tbLeft.length === 0)
            return <div></div>
        else
            return (
                <div className="container">
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
            );
    }
}
export default connect(
    // mapStateToProps
    state => ({ timeline: state.timeline }),
    // mapDispatchToProps
    dispatch => ({ acts: bindActionCreators(actions, dispatch) })
)(Content)
