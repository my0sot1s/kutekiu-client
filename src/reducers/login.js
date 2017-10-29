import { AFTER_LOGIN, AFTER_LOGOUT, AFTER_REGISTER } from '../types/login'

/**
 * struture
 * @property data - array| object
 * @property meta.status - number|any
 * @property meta.message - string|any
 * 
 */
const initState = {
    data: [],
    meta: {}
}
/**
 * @param {object} state - object default
 * @param {string} type - action key
 * @param {array|object} data - data
 * @param {number} status - 200 - Success 
 * @param {string} message - message
 */
export default (state = initState, { type, data, status, message }) => {

    switch (type) {
        case AFTER_LOGIN:
            return { ...state, data: data, meta: { status: status ? status : 201, message } }
        case AFTER_LOGOUT:
            return { data: null, meta: { status: 0 } }

        case AFTER_REGISTER:
            return { ...state, data: data, meta: { status, message } }
        default: return state;
    }
}
