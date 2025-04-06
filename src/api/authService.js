import api from "./authAxiosInstance";
//import axios from "axios";

const validateUser=async({username,password})=>{
    try{
        let res = await api.post(`/login`,{
            username,password
        });
      
        const token = res?.data?.accessToken;
        localStorage.setItem('token',token);
      
        return res?.data;

        
    }catch(error){
        console.log(error);
    }
}

export {validateUser};
