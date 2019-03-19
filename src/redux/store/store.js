import { createStore } from 'redux';
import rootReducer from "../reducers";

//if middleware is needed
// import {applyMiddleware} from 'redux';
//npm i redux-thunk  //run in terminal
// import thunk from 'redux-thunk'; //this is just an example
// import {compose} from 'redux'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export default store;