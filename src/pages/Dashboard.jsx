import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Details from './Details'
import { getAuthToken } from '../util/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  
  const navigate = useNavigate();
  const [isAuthenticated ,setIsauthenticated] = useState(false);
  
  useEffect(()=>{ 
    const data = getAuthToken();
    if(data)
    {
       setIsauthenticated(true);
    }
    else{
      navigate('/');
    }
  },[]);

  if(isAuthenticated===false)
  {
    return ;
  }

  return (
    // <div className='flex items-center justify-around space-x-8'>
    //    <div> <Form/></div>
       
    //    <div> <Details/></div>
       
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
    <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 backdrop-blur-md bg-opacity-80">
        <Form/>
      </div>

      {/* Details Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 max-h-[80vh] overflow-y-auto backdrop-blur-md bg-opacity-80">
        <Details />
      </div>
    </div>
  </div>
  )
}

export default Dashboard
