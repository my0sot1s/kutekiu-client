
import { AFTER_TIMELINE } from '../types/timeline'

const fetcher = require("./fetcher").default;

export const getTimeline = (link) => {
    return dispatch => fetcher(link)
        .then(payload => dispatch(afterTimeline(payload)))
        .catch(err => dispatch(afterTimeline(err)))
}
// type: constants.AFTER_TIMELINE
export const afterTimeline = ({ data, message, status }) => ({
    type: AFTER_TIMELINE,
    data,
    message,
    status
})