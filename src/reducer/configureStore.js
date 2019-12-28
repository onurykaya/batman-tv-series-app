import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './index'; 

const middleware = [thunk];
const initialState = {};

export default function configureStore(){
    return createStore(reducers, initialState, applyMiddleware(...middleware));
};

