import gameReducer from './gameReducer';


import { combineReducers } from 'react-redux';

export const rootReducer = combineReducers ({gameReducer});