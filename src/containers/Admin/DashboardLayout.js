import React from 'react'

import { Link, Outlet } from "react-router-dom";
import "../../assets/styles/dahboard/style.css"
function DashboardLayout() {

  return (
    <div>
      <nav className="sidebar-navigation">
        <ul>
          <li>
          <Link className="navigation_link"  aria-current="page" to="/dashboard/admin">
            <i className="fa-solid fa-table-columns"></i>
            <span className='navigation_name'>Admin</span>
            </Link>
          </li>
          
          <li>
          <Link className="navigation_link" to="/dashboard/admin/users">
            
            <i className="fa-solid fa-user"></i>
            <span className='navigation_name'>Users</span>
            </Link>
          </li>
          <li>
          <Link className="navigation_link" to="/dashboard/admin/savecars">
          <i className="fa-solid fa-car "></i>
            <span className='navigation_name'>Save Cars</span>
            </Link>
          </li>
          <li>
            <i className="fa fa-sliders"></i>
            <span className='navigation_name'> Settings</span>
          </li>
        </ul>
      </nav>
      <main className="col-md-9  col-lg-10 " style={{padding:"20px 10px 10px 100px"}}>
        <Outlet />
      </main>
     
    </div>
  )
}

export default DashboardLayout