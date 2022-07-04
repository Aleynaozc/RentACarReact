
import React from 'react'
import { Link } from 'react-router-dom';
import  '../assets/styles/components/NotFound/style.css';

const NotFound = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
      <img src={require('../assets/images/404.png')} style={{width:"1000px"}}/>
      </div>
      <div className='text-center'>
      <p style={{fontSize:"20px"}}>Look's like the wheels have come off.</p>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>Let's get back on track.</p>
      <Link to="/">
      <button className='notfound_btn' type='button' > Go Back</button>
      </Link>
      </div>
      </>
  )
}

export default NotFound;