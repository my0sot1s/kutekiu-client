import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker, { unregister } from './helper/registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react'
import createStore from './stores'

const { persistor, store } = createStore()

const LoadStore = () => (
    <div>Load Store plz wait a little bits...</div>
)
const onBeforeLift = () => {

}
ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<LoadStore />}
            persistor={persistor}
            onBeforeLift={onBeforeLift}>
            <BrowserRouter>
                <Route component={App} />
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));
// registerServiceWorker();
unregister();
