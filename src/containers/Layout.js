import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
function Layout(props) {
  return (
    <>
    <Header fullName={props.fullName}/>
 
    <div className='container-fluid p-0'>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout