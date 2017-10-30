import { AFTER_COMMENT, AFTER_GET_COMMENT } from '../types/comment'

const fetch = require("./fetcher");

export const postComment = (link, user_id, post_id, comment) => {
    let urlencoding = `user_id=${user_id}&post_id=${post_id}&comment=${comment}`;
    return dispatch => fetch.doPost(link, urlencoding)
        .then(payload => dispatch(afterComment(payload)))
        .catch(err => dispatch(afterComment(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterComment = ({ data, message, status }) => ({
    type: AFTER_COMMENT,
    data,
    message,
    status
})
export const getComments = (link) => {
    return dispatch => fetch.default(link)
        .then(payload => dispatch(afterGetComment(payload)))
        .catch(err => dispatch(afterGetComment(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterGetComment = ({ data, message, status }) => ({
    type: AFTER_GET_COMMENT,
    data,
    message,
    status
})