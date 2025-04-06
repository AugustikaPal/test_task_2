import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import Details from './Details'
import { getAuthToken } from '../util/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  
  //const navigate = useNavigate();
  // const [isAuthenticated ,setIsauthenticated] = useState(false);
  
  // useEffect(()=>{ 
  //   const data = getAuthToken();
  //   if(data)
  //   {
  //      setIsauthenticated(true);
  //   }
  //   else{
  //     navigate('/');
  //   }
  // },[]);

  // if(isAuthenticated===false)
  // {
  //   return ;
  // }

  return (
    <div>
       <Form/>
       <Details/>
    </div>
  )
}

export default Dashboard
