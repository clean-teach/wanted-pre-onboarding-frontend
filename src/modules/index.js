import { combineReducers } from 'redux';
import fetchReducer from './common';
import todoReducer from './todos';

const rootReducer = combineReducers({ fetchReducer, todoReducer });

export default rootReducer;
