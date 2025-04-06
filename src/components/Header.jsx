import React, { useEffect } from 'react'
import { Outlet ,Form, redirect ,useNavigate} from 'react-router-dom'

import 'tailwindcss';
import MainNavigation from './MainNavigation';
import { useRouteLoaderData } from 'react-router-dom';
import { getAuthToken, logoutAction } from '../util/auth';


const Header = () => {
  const token = useRouteLoaderData('root');
  console.log(token,"---token in header");
  const navigate = useNavigate();
  
  //const [isLogin,setIsLogin]=useState(false);
  useEffect(()=>{
   getAuthToken();
  },[]);

  return (
    <div>
      <nav>
          <div>Logo</div>
          <MainNavigation/>
       {
          token && <button onClick={()=>{ localStorage.removeItem('token'); navigate('/')}} >Logout</button>
          }
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header
