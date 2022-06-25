import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LiveSupport  from '../components/LiveSupport/liveSupport'
function Layout(props) {
  return (
    <>
    <Header fullName={props.fullName}/>
    <div className='container-fluid p-0'>
    <Outlet/>
    <LiveSupport></LiveSupport>
    </div>
   
    <Footer fullName={props.fullName}/>
    </>
  )
}

export default Layout