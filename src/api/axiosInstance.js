import axios from "axios";


const instance = axios.create({
    baseURL :`https://67f0eb8bc733555e24ab999e.mockapi.io/users`,
    headers:{
        "myname":"augustika"
    }
})

instance.interceptors.request.use(
    (config)=>{
        console.log(`Inside request interceptor`,config);
        return config
    }
    ,
    (error)=>{
        console.log(`Error occured in req interceptor`,error);
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response)=>{
        console.log(`inside response interceptor`,response);
        return response;
    }
    ,
    (error)=>{
        console.log(`Error in response Interceptors`);
        return Promise.reject(error);

    }
)

export default instance;