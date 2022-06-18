
import Route from './Route';
import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit'; // learning library
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducer from './reducers/Reducers';

import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default function FlashCardsAPP (props){

    return (
        <Provider store={store}>
            <Route />
        </Provider>

    )
}
