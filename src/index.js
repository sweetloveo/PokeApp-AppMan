import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/AppContainer'
import { Provider } from 'react-redux'
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
        <Provider store={configureStore()}>
            <App />
        </Provider>

    , document.getElementById('root'));
