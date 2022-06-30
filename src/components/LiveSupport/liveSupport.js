import React, { useState } from 'react';
import "../LiveSupport/liveSupport.css";
import "../../assets/images/canli.png";
import LiveSupportLogin from "../../components/LiveSupport/liveSupportLogin/LiveSupportLogin"

function liveSupport() {
  const [openlivesupport,setopenlivesupport]=useState(false)
 
  return (
    <>
    <div className='livesupport__container'  style={{ display: openlivesupport ? "none" : "block" }}>
      <div className='livesupport__icons_area'>
        <img src={require('../../assets/images/canli2.png') } className="livesupport__icon" onClick={()=>setopenlivesupport(true)} alt="livesupport"></img>
      </div>
      </div>
      <div>
     {openlivesupport && <LiveSupportLogin setopenlivesupport={setopenlivesupport} openlivesupport={openlivesupport}  />}
      </div>  
      
      </>
  )
}

export default liveSupport