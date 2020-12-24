import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messageReducer from "./message-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./profile-reducer";
import {reducer as formReduser} from 'redux-form'
import appReducer from "./app-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    massagesPage: messageReducer,
    sidebarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReduser,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;