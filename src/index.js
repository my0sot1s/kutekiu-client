import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './helper/registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
    <Provider store={require("./stores").default()}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
