import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Hello header</h2>
      <Outlet/>
    </div>
  )
}

export default Header
