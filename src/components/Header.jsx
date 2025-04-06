import React, { useEffect } from 'react'
import { Outlet ,Form, redirect ,useNavigate} from 'react-router-dom'

import 'tailwindcss';

import { useRouteLoaderData } from 'react-router-dom';
import { getAuthToken, logoutAction } from '../util/auth';


const Header = () => {
  const token = useRouteLoaderData('root');
  console.log(token,"---token in header");
  const navigate = useNavigate();
  
  //const [isLogin,setIsLogin]=useState(false);
  // useEffect(()=>{
  //  getAuthToken();
  // },[]);

  return (
    <div>
      <nav>
          <h2>Logo</h2>
       
       {
          token && <button onClick={()=>{ localStorage.removeItem('token'); navigate('/')}} >Logout</button>
          }
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header
