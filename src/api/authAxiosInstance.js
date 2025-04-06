import axios from "axios";

const api = axios.create({
    baseURL: `https://dummyjson.com/auth`
})
api.interceptors.request.use(
    (config)=>{
        console.log(`Inside login req interce`);
        return config;
    }
    ,
    (error)=>{
        console.log(`Inside login auth response interceptor`);
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (res)=>{
        return res;
    }
,
    (error)=>{
        return Promise.reject(error);
    }
)

export default api;