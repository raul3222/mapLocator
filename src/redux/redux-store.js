import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import coordReducer from './coordReduser';
// import thunkMiddleware from 'redux-thunk';
// import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    coordReducer: coordReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;