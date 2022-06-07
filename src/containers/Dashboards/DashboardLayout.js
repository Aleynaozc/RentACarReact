import React from 'react'

import { Link, Outlet } from "react-router-dom";
import "../../assets/styles/dahboard/style.css"
function DashboardLayout() {
  return (
   <div>

<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/admin">
         RentaCar
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a
              className="nav-link px-3"
              href="#"
            
            >
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin">
                  <span
                    data-feather="home"
                    className="align-text-bottom"
                  ></span>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/admin/savecars">
                  <span
                    data-feather="file"
                    className="align-text-bottom"
                  ></span>
                  Save Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="admin/users">
                  <span
                    data-feather="shopping-cart"
                    className="align-text-bottom"
                  ></span>
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    

   </div>
  )
}

export default DashboardLayout