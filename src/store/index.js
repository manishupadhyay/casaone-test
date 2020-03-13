import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import {rootReducer} from '../reducers/rootReducer';
import { localStorageKey } from '../config';

const storedRules = localStorage.getItem(localStorageKey);
let rulesList = JSON.parse(storedRules) || [];
initialState.rulesList = rulesList;
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

