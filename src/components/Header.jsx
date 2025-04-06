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
  
  // //const [isLogin,setIsLogin]=useState(false);
  // useEffect(()=>{
  //  getAuthToken();
  // },[]);

  return (
    <div>
      <nav>
          <h2>Logo</h2>
       
       {
          token && <button onClick={()=>{ localStorage.removeItem('token'); navigate('/')}} >Logout</button>

          // token && <button onClick={logoutAction} >Logout</button>
          }
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header
