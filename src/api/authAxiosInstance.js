import axios from "axios";

const authApi = axios.create({
    baseURL: `https://dummyjson.com/auth`
})
authApi.interceptors.request.use(
    (config)=>{
        return config;
    }
    ,
    (error)=>{
        console.log(`Inside login auth response interceptor`);
        return Promise.reject(error);
    }
)

authApi.interceptors.response.use(
    (res)=>{
        return res;
    }
,
    (error)=>{
        return Promise.reject(error);
    }
)

export default authApi;