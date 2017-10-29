import { AFTER_COMMENT } from '../types/comment'

const doPost = require("./fetcher").doPost;

export const postComment = (link, user_id, post_id, comment) => {
    let urlencoding = `user_id=${user_id}&post_id=${post_id}&comment=${comment}`;
    return dispatch => doPost(link, urlencoding)
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