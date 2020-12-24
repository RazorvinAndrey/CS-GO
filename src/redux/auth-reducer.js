import {authAPI} from "../api/Api";

const SET_USERS_DATA = 'SET-USERS-DATA';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (email, id, login, isAuth) => {
    return {type: SET_USERS_DATA, data: {email, id, login, isAuth}};
}

export const getAuthUserData = () => async (diapatch) => {
    let response = await authAPI.me();
    if(response.data.resultCode === 0){
        let {email, id, login} = response.data.data;
        diapatch(setAuthUserData(email, id, login, true));
    }
}

export default authReducer;