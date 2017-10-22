import React from "react"
import Modal from "./components/modal"
import { doPost } from '../actions/fetcher'
import DropzoneComponent from 'react-dropzone-component';

require("../../node_modules/dropzone/dist/min/dropzone.min.css");
require("../../node_modules/react-dropzone-component/styles/filepicker.css");
require("./imageupload.css");
class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: [], showModal: false };
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false,
            maxFiles: 5,
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: "no-url"
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ showModal: nextProps.showModal })
    }
    handleFileAdded(file) {
        this.state.files.push(file);
    }
    removedfile(file) {
        for (var i = 0; i < this.state.files.length; i++) {
            if (this.state.files[i].name === file.name) {
                this.state.files.splice(i, 1);
                break;
            }
        }
    }
    render() {

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this),
            removedfile: this.removedfile.bind(this),
        }


        return (
            // <Modal showModal={this.state.showModal}>
            <div className="main_body">
                <div className="wraper">
                    <DropzoneComponent config={this.componentConfig}
                        eventHandlers={eventHandlers}
                        djsConfig={this.djsConfig} />
                </div>
            </div>
            // </Modal>

        )
    }
}

export default ImageUpload