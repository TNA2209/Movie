import { applyMiddleware, combineReducers, createStore } from "redux";
import * as thunk from "redux-thunk"; // Import Redux Thunk as default

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));
