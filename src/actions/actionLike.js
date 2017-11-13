import { AFTER_LIKE, AFTER_UNLIKE } from '../types/actionLike'

const doPost = require("./fetcher").doPost;

export const doLike = (link, user_id, post_id) => {
    let urlencoding = `user_id=${user_id}&post_id=${post_id}`;
    return dispatch => doPost(link, urlencoding)
        .then(payload => dispatch(afterLike(payload)))
        .catch(err => dispatch(afterLike(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterLike = ({ data, message, status }) => ({
    type: AFTER_LIKE,
    data,
    message,
    status
})
export const doUnlike = (link, user_id, post_id) => {
    let urlencoding = `user_id=${user_id}&post_id=${post_id}`;
    return dispatch => doPost(link, urlencoding)
        .then(payload => dispatch(afterUnlike(payload)))
        .catch(err => dispatch(afterUnlike(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterUnlike = ({ data, message, status }) => ({
    type: AFTER_UNLIKE,
    data,
    message,
    status
})