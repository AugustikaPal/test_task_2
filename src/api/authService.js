import api from "./authAxiosInstance";
//import axios from "axios";

const validateUser=async({username,password})=>{
    try{
        let res = await api.post(`/login`,{
            username,password
        });
        console.log("Inside validation ")
        console.log(username,password);

        console.log("----8 user emily logging in ")
        console.log(res?.data);
        
        return res?.data;
        
    }catch(error){
        console.log(error);
    }
}

export {validateUser};
