import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
function Layout() {
  return (
    <>
    <Header/>
    <div className='container'>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout