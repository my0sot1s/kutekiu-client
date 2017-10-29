

import { AFTER_LOGIN, AFTER_LOGOUT, AFTER_REGISTER } from '../types/login'

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


export const logout = (link) => {
    return dispatch => doPost(link)
        .then(payload => dispatch(afterLogout(payload)))
        .catch(err => dispatch(afterLogout(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterLogout = ({ data, message, response_code }) => ({
    type: AFTER_LOGOUT,
    data,
    message,
    status: response_code
})


export const register = (link, username, password, email) => {
    let urlencoding = `username=${username}&password=${password}&email=${email}`;
    return dispatch => doPost(link, urlencoding)
        .then(payload => dispatch(afterRegister(payload)))
        .catch(err => dispatch(afterRegister(err)))
}
// type: constants.GET_LIST_IMAGES
export const afterRegister = ({ data, message, response_code }) => ({
    type: AFTER_REGISTER,
    data,
    message,
    status: response_code
})