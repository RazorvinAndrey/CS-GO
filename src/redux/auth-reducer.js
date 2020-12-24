import {authAPI, securityAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET-USERS-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payLoad,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (email, id, login, isAuth) => {
    return {type: SET_USERS_DATA, data: {email, id, login, isAuth}};
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payLoad:{captchaUrl}};
}

export const getAuthUserData = () => async (diapatch) => {
    let response = await authAPI.me();
    if(response.data.resultCode === 0){
        let {email, id, login} = response.data.data;
        diapatch(setAuthUserData(email, id, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let messages = response.data.messages.length > 0 ? response.data.messages : "Some error"
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;