import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const config = {
    key: 'root',
    storage,
}
const reducer = persistCombineReducers(config, rootReducer)

const middleware = [thunk]
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}


export default initState => {
    const enhancer = compose(
        applyMiddleware(...middleware)
    )
    const store = createStore(reducer, initState, enhancer)
    let persistor = persistStore(store)
    return { store, persistor }
}