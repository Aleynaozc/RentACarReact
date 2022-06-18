import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {authLogout} from "../../services/store/auth/index"

const header = (token) => {

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const _signOut = () => {
    dispatch(authLogout());
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item col-6">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item col-6">
              <Link className="nav-link" to="carslist">Cars</Link>
            </li>
            {/* <div>{menu}</div> */}

            {!auth.token ? (
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="sign-in-up">
                  Login
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="dashboard/admin">
                Dashboard
              </Link>
            </li>
          </ul>
          {auth.token && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                _signOut();
              }}
            >
              Sign out
            </button>
          )}

        </div>
      </div>
    </nav>
  )
}
export default header