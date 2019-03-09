import { createStore, applyMiddleware, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

const configure = () => createStore(reducers, applyMiddleware(...middlewares));

export default configure;