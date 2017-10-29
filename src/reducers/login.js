import { AFTER_LOGIN } from '../types/login'

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
            return { ...state, data: data, meta: { status, message } }
        default: return state;
    }
}
