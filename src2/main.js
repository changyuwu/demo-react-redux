/**
 * Created by user on 2017/9/12.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './contaners/App';
import store from './store'
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)