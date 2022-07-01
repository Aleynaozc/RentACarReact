import React from 'react'

import "../liveSupportLogin/style.css"
import { Form, Formik } from 'formik';
import { SignInModel } from '../../../services/utils/Forms/SignIn/InitialModels';


function liveSupportLogin({setopenlivesupport,openlivesupport}) {
  return (
        <div className='livesupportlogin__container  'style={{ animationDuration: openlivesupport ? "2s" : "2s",  animationName: openlivesupport ? "modalopen" : "modalclose"  }}>
        <div className='livesupportlogin__header'>
           Live Support
          <i className="fa fa-chevron-down" onClick={()=>setopenlivesupport(false)}></i>
          
        </div>
        
      <div className="livesupport_signin" >
      <img src={require('../../../assets/images/logo2.png')} className="livesupport_logo_img" alt="livesupport-login"/>
        <div className="">
         
          <Formik
            initialValues={SignInModel}
            onSubmit={(values, { resetForm }) => {
              resetForm();
            }}
          >
            {({
              errors, touched, handleChange }) => (
              <Form>
                <div className="form-floating mb-3">
                  <input type="text" name='email' onChange={handleChange} className="form-control" id="floatingInput" />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && touched.email ? <small >{errors.email}</small> : null}
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="password" onChange={handleChange} className="form-control" id="floatingPassword" />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>

                <button className="w-100 btn btn-lg sing_in_btnn"   type="submit" >Sign in</button>
              </Form>
            )}</Formik>
        </div>
    </div>
    </div>
  

  )
}

export default liveSupportLogin