import instance from "./axiosInstance";
//import axios from "axios";

const fetchUsers=async()=>{
    try{
       const resp = await instance.get('/enteries');
       console.log(resp?.data,"-----5");
       return resp?.data;
    }catch(error){
        console.log(`Error fetching users`,error);
    }

}

const createUsers=async(name,company,technology,description)=>{
   console.log(`Inside api for create user-----16`);
    console.log(name,company,technology,description);

    try{
        const res = await instance.post(`/enteries`,{
            name,company,technology,description
        });
        console.log(`-----23 inside  create api `);

        console.log(res?.data);
        return res?.data;


    }catch(error){
        console.log(`Error in adding user`,error);
    }
}

export {fetchUsers,createUsers}