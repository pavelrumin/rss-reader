import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import App from './App';
import './index.css';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
