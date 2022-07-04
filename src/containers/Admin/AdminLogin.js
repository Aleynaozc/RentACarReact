
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { authAdminCreateToken } from '../../services/store/auth/createAdminToken';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function AdminLogin() {

  const dispatch = useDispatch();
  const _loginAdmin = async (loginAdminModel) => {
   dispatch(authAdminCreateToken(loginAdminModel))
    
   
  };

  return (
    <div className='col-lg-6 offset-3 mt-5 '>
      <nav>
        <div className="nav nav-tabs mb-5" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign In</button>

        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <Formik
            initialValues={{ fullName: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              _loginAdmin(values);
              resetForm();
            }}
            // onSubmit={(values) => {
            //   useEffect = ()=>{
            //     _loginAdmin(values)
            //   }
            // }}
          >
            {({
              errors, touched, handleChange }) => (
              <Form>

                <h1 className="h3 mb-5 fw-normal">Please sign in</h1>

                <div className="form-floating mb-3">
                  <input type="text" name='fullName' onChange={handleChange} className="form-control" id="floatingInput" />
                  <label htmlFor="floatingInput">Fullname</label>
                  {errors.fullName && touched.fullName ? <small >{errors.fullName}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="password" onChange={handleChange} className="form-control" id="floatingPassword" />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>
                 <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
              </Form>
            )}</Formik>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin