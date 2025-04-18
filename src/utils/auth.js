import { redirect } from "react-router-dom";


export const getAuthToken=()=>{

    try{
        let token =  localStorage.getItem('token');
        
        return token;
    }catch(error)
    {
        console.log("Unauthorized user",error);
    }

}

export const tokenLoader=()=>{
    try{
        return getAuthToken();
    }catch(error){
        console.log("Token not found",error)
    }
}

export function logoutAction(){
  
    localStorage.removeItem('token');
    return redirect('/');
}


export const checkAuthLoader=()=>{
    const token = getAuthToken();
    if(!token)
    {
        return redirect('/');
    }
}