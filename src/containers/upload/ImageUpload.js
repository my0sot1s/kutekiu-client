import React from "react"
import Modal from "../components/modal"
import { doPost } from '../../actions/fetcher'
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/upload'
require("./imageupload.css");

let ARRAY_FILTER = ['gif', 'png', 'jpg', 'jpeg']

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [], preview: null, isLogin: false, info: {} };
    }
    componentDidMount() {
        this.props.login.data && this.props.login.meta.status === 200
            ? this.setState({ isLogin: true, info: this.props.login.data })
            : this.setState({ isLogin: false, info: this.props.login.data });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.data && nextProps.login.meta.status === 200)
            this.setState({ isLogin: true, info: nextProps.login.data })
        if (nextProps.uploadPost.meta.status === 200) {
            nextProps.history.push('/');
        }
    }
    // handleFileAdded(file) {
    //     this.state.files.push(file);
    // }
    // removedfile(file) {
    //     for (var i = 0; i < this.state.files.length; i++) {
    //         if (this.state.files[i].name === file.name) {
    //             this.state.files.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
    goBack() {
        this.props.history.goBack()
    }
    changeUpload(event) {
        let document = ReactDOM.findDOMNode(this);
        let len = event.target.files.length, arrC = [];
        document.querySelector('.photo-picker').className += ' open';
        for (let i = 0; i < len; i++) {
            var imgUrl = URL.createObjectURL(event.target.files[i]);
            var ext = document.querySelector('.imageUp').files[0].name.replace(/^.*\./, '').toLowerCase();
            var title = document.querySelector('.imageUp').files[0].name.split('\\').pop();

            if (ARRAY_FILTER.indexOf(ext) === -1) {
                alert('Only Image can be Upload!');
            }
            else {
                arrC.push(
                    <div className="preview-card">
                        <img className="preview" src={imgUrl} />
                        <span className="photo-title">{title}</span>
                    </div>
                )
            }
        }
        this.setState({ preview: arrC })
    }
    onClick() {
        let document = ReactDOM.findDOMNode(this);
        document.querySelector('.imageUp').onclick = function () {
            document.querySelector('.photo-picker').classList.remove = 'open';
        }
        this.setState({ preview: [] })
    }
    sendData() {
        if (this.state.isLogin) {
            let form = new FormData(),
                { access_token, id } = this.props.login.data;
            if (!access_token || !id) {
                alert("Bạn phải đăng nhập trước"); return;
            }
            Array.from(this.file.files).forEach(file => {
                form.append('file', file, file.name)
            });
            // form.append('file', this.file.files[0], this.file.files[0].name)
            // form.append('file', this.file.files[1], this.file.files[1].name)
            form.append('tag', this.tag.value)
            form.append('post_content', this.post_content.value)
            form.append('user_id', id)
            this.props.acts.upload(`/social_post/create-post?access_token=${access_token}`, form);
        }
        else alert("Bạn phải đăng nhập trước")
    }
    render() {
        // For a list of all possible events (there are many), see README.md!
        return (
            <Modal goBack={this.goBack.bind(this)}>
                <form className="main_body" ref={form => this.form = form}>
                    <h1>Share you momment</h1>
                    <div className="photo_form">
                        <div className="photo_cap">
                            <textarea id="post_content" name="post_content"
                                placeholder="Write something.."
                                ref={post_content => this.post_content = post_content}
                                style={{ height: 200, resize: 'none' }}></textarea>
                            <input type="text" id="tag" name="tag"
                                ref={tag => this.tag = tag}
                                placeholder="Some tags..." />
                            <input type="button" id="btn_submit"
                                value="Upload Now" onClick={this.sendData.bind(this)} />
                        </div>
                        <div className="photo-picker">
                            <div className="camera">
                                <div className="lens"></div>
                                <div className="grip"></div>
                                <div className="moc"></div>
                                <input className="imageUp" type="file" multiple ref={file => this.file = file}
                                    name="file"
                                    onChange={this.changeUpload.bind(this)}
                                    onClick={this.onClick.bind(this)} />
                            </div>
                            <div className="preview_all">
                                {this.state.preview}
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default connect(
    // mapStateToProps
    state => ({ uploadPost: state.uploadPost, login: state.login }),
    // mapDispatchToProps
    dispatch => ({ acts: bindActionCreators(actions, dispatch) })
)(ImageUpload)
// export default ImageUpload