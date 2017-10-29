

import { AFTER_LOGIN } from '../types/login'

const doPost = require("./fetcher").doPost;

export const login = (link, login, password) => {
    let urlencoding = `login=${login}&password=${password}`;
    return dispatch => doPost(link, urlencoding)
        .then(payload => dispatch(afterLogin(payload)))
        .catch(err => dispatch(afterLogin(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterLogin = ({ data, message, response_code }) => ({
    type: AFTER_LOGIN,
    data,
    message,
    status: response_code
})