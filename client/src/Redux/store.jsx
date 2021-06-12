import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loginReducer } from "./Authentication/authReducer";
import { userReducer } from "./Suggestions/Reducer";
import { profileReducer } from "./UserProfile/profileReducer";

const rootReducer = combineReducers({
    user : userReducer,
    profile: profileReducer,
    login:loginReducer
});

const customMiddleware = (store) => (next) => (action) => {
    return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    createComposer(applyMiddleware(customMiddleware))
);