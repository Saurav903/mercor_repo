import { legacy_createStore,compose,combineReducers,applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { codepageReducer } from "./codepage/codepage.reducer";

const rootReducer = combineReducers({
    qns:codepageReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));