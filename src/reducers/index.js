import { persistReducer } from 'redux-persist'
import session from 'redux-persist/lib/storage/session'

const setConfig = (key) => {
    return {
        key,
        storage: session,
    }
}


export default require("redux").combineReducers({
    timeline: require("./timeline").default,
    profile: require("./profile").default,
    detail: require("./detail").default,
    login: persistReducer(setConfig("login"), require("./login").default),
    commentReducer: require("./comment").default,
    uploadPost: require("./upload").default
})