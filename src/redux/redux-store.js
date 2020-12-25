import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReduser} from 'redux-form'
import appReducer from "./app-reduser";
import caseReduser from "./case-reduser";


let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    cases: caseReduser,
    form: formReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;