import React, { useEffect, useState } from 'react'
import { Outlet ,Form, redirect ,useNavigate, useLocation} from 'react-router-dom'

import 'tailwindcss';

import { useRouteLoaderData } from 'react-router-dom';
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
  console.log(token,'-----state')
  


  return (
    // <div>
    //   <nav className='flex justify-around'>
    //       <h2><img src='./logo.jpg'/></h2>
       
    //    {
    //       token && <button onClick={()=>{ localStorage.removeItem('token'); navigate('/')}} className='w-[50px] h-[30px] rounded-sm text-center ' >Logout</button>

    //       // token && <button onClick={logoutAction} >Logout</button>
    //       }
    //   </nav>
    //   <Outlet/>
    // </div>

  //   <div className="min-h-screen overflow-hidden">
  //   <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-white fixed top-0 z-50">
  //     <h2 className="text-xl font-bold">
  //       <img src="/logo.jpg" alt="Logo" className="h-10 object-contain" />
  //     </h2>
  //     {token && (
  //       <button
  //         onClick={() => {
  //           localStorage.removeItem('token');
  //           navigate('/');
  //         }}
  //         className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
  //       >
  //         Logout
  //       </button>
  //     )}
  //   </nav>

  //   {/* Push main content below fixed header */}
  //   <div className="pt-20">
  //     <Outlet />
  //   </div>
  // </div>

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

  {/* Main content below header */}
  <div className="pt-20">
    <Outlet />
  </div>
</div>


  )
}

export default Header
