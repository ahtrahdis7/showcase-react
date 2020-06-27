import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Photos } from './photos';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos
        }),
        applyMiddleware(thunk, logger)
    );
    console.log(store);

    return store;
}