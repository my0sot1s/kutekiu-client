
import { AFTER_UPLOAD } from '../types/upload'

const doUpload = require("./fetcher").doUpload;

export const upload = (link, data) => {
    return dispatch => doUpload(link, data)
        .then(payload => dispatch(afterUpload(payload)))
        .catch(err => dispatch(afterUpload(err)))
}
// type: constants.AFTER_TIMELINE
export const afterUpload = ({ data, message, status }) => ({
    type: AFTER_UPLOAD,
    data,
    message,
    status
})