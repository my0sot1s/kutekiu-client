import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/image'
import _ from 'lodash';
require("./image.css")


class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.props.dsac.getImages("https://kutekiu.herokuapp.com/api/Image/getImage?limit=12")
    }
    componentWillReceiveProps(nextProps) {
        var src = [];
        nextProps.image.data.map(value => {
            src.push({ src: value.data, thumbnail: value.data });
        })
        this.setState({
            data: _.chunk(src, Math.floor(src.length / 3))
        })
    }

    renderItem(src, tag) {
        return (<div className="item">
            <img src={src} tag={tag} />
            <div className="wrapper">
                <div className="btn"></div>
            </div>
        </div>)
    }
    renderContent(array) {
        return (
            <div className="content">
                {array.map(value => { return this.renderItem(value.src, value.src) })}
            </div>
        )
    }
    render() {
        if (!this.state.data) {
            return <div>Loading...</div>;
        }
        let pim = [];
        for (var i = 0; i < 3; i++) {
            pim.push(this.renderContent(this.state.data[i]));
        }
        return (
            <div className="container">
                {pim}
            </div>
        );
    }
}
export default connect(
    // mapStateToProps
    state => ({ image: state.image }),
    // mapDispatchToProps
    dispatch => ({ dsac: bindActionCreators(actions, dispatch) })
)(Image)