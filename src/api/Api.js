import * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://',
    headers:{
        "API-KEY":''
    },
});

export const authAPI = {
    me(){
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null){
        return instanse.post(`auth/login`, { email, password, rememberMe, captcha});
    },
    logout(){
        return instanse.delete(`auth/login`);
    }
}

