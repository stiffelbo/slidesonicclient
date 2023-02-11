import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//auth

// entities reducers

//aplication flow reducers
import {rwdReducer} from './rwdRedux';
import collectionsReducer from './collectionsRedux';




// define reducers  
const reducers = {
    rwd : rwdReducer,
    collections : collectionsReducer,
};


console.log(reducers);

// combine reducers
const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
	)
);

export default store;