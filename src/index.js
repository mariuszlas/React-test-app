import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import App from './App';

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
