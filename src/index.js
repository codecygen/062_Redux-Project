import React from 'react';
import ReactDOM from 'react-dom';

// Redux-Setting-Redux-Store-To-Be-Used-By-Components
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// Redux-Setting-Redux-Store-To-Be-Used-By-Components
import store from './store/index';


ReactDOM.render(
    // Redux-Setting-Redux-Store-To-Be-Used-By-Components
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
