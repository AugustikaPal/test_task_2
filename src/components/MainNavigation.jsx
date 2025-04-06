import React from 'react';
import { NavLink,Form, useRouteLoaderData } from 'react-router-dom';


const MainNavigation = () => {

    const token = useRouteLoaderData('root');
    console.log(token,"---token root");

  return (
    <div>
      <nav>
      {/* <ul>
        
        {token && <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>}
      
      </ul> */}
      </nav>
    </div>
  )
}

export default MainNavigation
