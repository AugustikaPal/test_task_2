import React, { useEffect, useState } from 'react'
import { Outlet ,Form, redirect ,useNavigate, useLocation} from 'react-router-dom'

import 'tailwindcss';

//import { useRouteLoaderData } from 'react-router-dom';
import { getAuthToken, logoutAction } from '../util/auth';



const Header = () => {
const [token , setToken]=useState('');
const location = useLocation();
  // const token = useRouteLoaderData('root');

  // console.log(token,"---token in header");
  const navigate = useNavigate();
 


  useEffect(()=>{
    
   // console.log('-ap---')

    const data = localStorage.getItem('token')
    setToken(data);

  },[location])
  //console.log(token,'-----state')
  


  return (

<div className="min-h-screen overflow-hidden">
  <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Logo" className="h-10 object-contain" />
      </div>

      {token && (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Logout
        </button>
      )}
    </div>
  </nav>

 
  <div className="pt-20">
    <Outlet />
  </div>
</div>


  )
}

export default Header
