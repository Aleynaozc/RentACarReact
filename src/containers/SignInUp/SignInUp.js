import { Form, Formik } from 'formik';
import React from 'react'
import { SignInModel } from '../../services/utils/Forms/SignIn/InitialModels';
import { SignInValidationScheme } from '../../services/utils/Forms/SignIn/validationScheme';
import { SignUpModel } from '../../services/utils/Forms/SignUp/initialModel';
import { SignUpValidationScheme } from '../../services/utils/Forms/SignUp/validationScheme';
import "../../assets/styles/components/SignInUp/style.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authCreateToken } from '../../services/store/auth/createToken';
import { useNavigate } from 'react-router-dom';





function SignInUp() {

  const dispatch = useDispatch();
  const _login = (loginModel) => {
    console.log(loginModel);
    dispatch(authCreateToken(loginModel))
  };



  const navigate = useNavigate();
 




  return (
    <div className='col-6 offset-3 mt-5'>
      <nav>
        <div className="nav nav-tabs mb-5" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign In</button>
          <button className="nav-link " id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign Up</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <Formik
            initialValues={SignInModel}
            validationSchema={SignInValidationScheme}
            onSubmit={(values, { resetForm }) => {
              _login(values);
              resetForm();
            }}
          >
            {({
              errors, touched, handleChange }) => (
              <Form >

                <h1 className="h3 mb-5 fw-normal">Please sign in</h1>

                <div className="form-floating mb-3" >
                  <input type="text"  autocomplete="false" name='email' onChange={handleChange} className="form-control" id="floatingInput" />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && touched.email ? <small >{errors.email}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="password" onChange={handleChange} className="form-control" id="floatingPassword" />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>

                <button className="w-100 btn btn-lg sing_in_btnn"  onClick={() => navigate(-1)}  type="submit" >Sign in</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
              </Form>
            )}</Formik>
        </div>
        <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab" tabIndex="1">


          {/* REGISTER */}
          <Formik
            initialValues={SignUpModel}
            validationSchema={SignUpValidationScheme}
            onSubmit={(values, { resetForm }) => {

              axios.post("https://localhost:44352/api/Anonymous/Register",
                {
                  headers: { 'Content-type': 'application/json' },
                  fullName: values.fullName,
                  email: values.email,
                  password: values.password,
                  rePassword: ""
                }

              ).then((response) => console.log(response.data))

              resetForm();


            }

            }

          >
            {({ errors, touched, handleChange, values }) => (
              <Form>

                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name='fullName'
                    onChange={handleChange}
                    value={values.fullName}
                    className="form-control"
                    id="floatingInput"
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                  {errors.fullName && touched.fullName ? <small >{errors.fullName}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    className="form-control"
                    id="floatingInput" />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && touched.email ? <small >{errors.email}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="form-control"
                    id="floatingPassword" />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="rePassword"
                    onChange={handleChange}
                    value={values.rePassword}
                    className="form-control"
                    id="floatingPassword" />
                  <label htmlFor="floatingPassword">Re-Password</label>
                  {errors.rePassword && touched.rePassword ? <small>{errors.rePassword}</small> : null}
                </div>


                <button className="w-100 btn btn-lg sing_in_btnn" type="submit">Sign Up</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default SignInUp