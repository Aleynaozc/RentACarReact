import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/style.css'

export default function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img  src={process.env.PUBLIC_URL+'/images/logo.png'} className="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item col-6">
                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item col-6">
                <Link className="nav-link" to="carlist">Cars</Link>
              </li>
              <li className="nav-item dropdown col-6">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="sign-in-up">
                  Login
                </Link>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
  )
}
