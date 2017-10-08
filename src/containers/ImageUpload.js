import React from "react"
import Modal from "./components/modal"
import { doPost } from '../actions/fetcher'
require("./imageupload.css");


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '', showModal: false };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file   
        // debugger
        // console.log('handle uploading-', this.state.file);
        let data = new FormData();
        data.append('file', this.state.file);
        // data.append('name', "file");
        doPost(`http://localhost:3004`, data).then(data => {
        }).catch(err => {
        })
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ showModal: nextProps.showModal })
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <Modal showModal={this.state.showModal}>
                <div className="previewComponent">
                    {/* type="submit" */}
                    {/* encType="multipart/form-data" method="POST" encType="multipart/form-data" method="POST" */}
                    <form>
                        <input className="fileInput"
                            type="file"
                            name="file"
                            onChange={(e) => this._handleImageChange(e)} />
                        <button className="submitButton"
                            type="button"
                            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                </div>
            </Modal>

        )
    }
}

export default ImageUpload