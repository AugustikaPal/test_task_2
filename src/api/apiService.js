import { getAuthToken } from "../util/auth";
import instance from "./axiosInstance";
//import axios from "axios";

const fetchUsers=async()=>{
    const token = getAuthToken();
    try{
       const resp = await instance.get('/enteries',{
        headers:{
            "Authorization":"Bearer "+token
        }
       });
       return resp?.data;
    }catch(error){
         console.log(`Error fetching users`,error);
    }

}
const fetchUserById=async(id)=>{
    const token = getAuthToken();
    try{
        const res = await instance.get(`/enteries/${id}`,{
            headers:{
                "Authorization":"Bearer "+token
            }
           });
        return res;
    }catch(error){
        console.log(`Error`,error);
    }
}

const createUsers=async(name,company,technology,description)=>{

    try{
        const token = getAuthToken();
        const res = await instance.post(`/enteries`,{
            name,company,technology,description
        },{
            headers:{
                "Authorization":"Bearer "+token
            }
        });

        console.log(res?.data);
        return res?.data;


    }catch(error){
        console.log(`Error in adding user`,error);
    }
}

export {fetchUsers,createUsers,fetchUserById}