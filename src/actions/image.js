
import { AFTER_LIST_IMAGES } from '../types/image'

const fetcher = require("./fetcher").default;

export const getImages = (link) => {
    return dispatch => fetcher(link)
        .then(payload => dispatch(afterImages(payload)))
        .catch(err => dispatch(afterImages(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterImages = ({ data, message, status }) => ({
    type: AFTER_LIST_IMAGES,
    data,
    message,
    status
})