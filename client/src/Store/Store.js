import  reducer  from "../Reducers/Reducers";
// import { configureStore } from '@reduxjs/toolkit';
import Thunk from "redux-thunk";   //asyncronico!

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
   applyMiddleware(Thunk),
));

export default store;