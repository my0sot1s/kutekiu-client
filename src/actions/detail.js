
import { AFTER_DETAIL_POST } from '../types/detail'

const fetcher = require("./fetcher").default;

export const getDetail = (link) => {
    return dispatch => fetcher(link)
        .then(payload => dispatch(afterDetail(payload)))
        .catch(err => dispatch(afterDetail(err)))
}
// type: constants.AFTER_TIMELINE
export const afterDetail = ({ data, message, status }) => ({
    type: AFTER_DETAIL_POST,
    data,
    message,
    status
})