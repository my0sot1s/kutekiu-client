
import { AFTER_PROFILE } from '../types/profile'

const fetcher = require("./fetcher").default;

export const getProfile = (link) => {
    return dispatch => fetcher(link)
        .then(payload => dispatch(afterProfile(payload)))
        .catch(err => dispatch(afterProfile(err)))
}
// type: constants.AFTER_TIMELINE
export const afterProfile = ({ data, message, status }) => ({
    type: AFTER_PROFILE,
    data,
    message,
    status
})