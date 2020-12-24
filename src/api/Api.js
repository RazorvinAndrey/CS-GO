import * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:{
        "API-KEY":'77758c63-657b-4d55-8010-f262201c0125'
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data});
    },
    follow(id){
        return instanse.delete(`/follow/${id}`).then(response => { return response.data});
    },
    unFollow(id){
        return instanse.post(`/follow/${id}`).then(response => { return response.data});
    }
}

export const profileAPI = {
    getProfile(id){
        return instanse.get(`profile/` + id).then(response => {return response});
    },
    getStatus(id){
        return instanse.get(`profile/status/${id}`);
    },
    updateStatus(status){
        return instanse.put(`profile/status`, {status: status});
    },
    savePhoto(file){
        debugger
        const formData = new FormData();
        formData.append("image", file);
        return instanse.put(`profile/photo`, formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }});
    },
    saveProfile(profile){
        return instanse.put(`profile`, profile);
    }
}

export const getUsers = (currentPage, pageSize) =>{
    return instanse.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
    });
}

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

export const securityAPI = {
    getCaptchaUrl(){
        return instanse.get(`security/get-captcha-url`);
    }
}
