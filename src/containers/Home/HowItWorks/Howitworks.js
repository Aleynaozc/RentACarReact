import React from 'react'
import "../HowItWorks/style.css"

function Howitworks() {
    return (
        <>
            <div className="howitworks__container col-lg-12">
                <div className='howitworks__header'>
                    <h5 className=' howitworks_main__title'>HOW IT WORKS</h5>
                    <h2 className='howitworks__subtitle '>Following 3 working steps</h2>
                </div>
                <div className='steps__container col-lg-8'>
                    <i className="fa-solid fa-location-dot howitwork_icon"></i>
                    <img className='howitwork_line1 ' src={require('../../../assets/images/work2.png')} alt="howitwork" />
                    <i className="fa-solid fa-calendar-plus howitwork_icon " style={{background: "linear-gradient(#c8ccd1,#3e4d5d)" ,color:'rgb(255, 255, 255)'}}></i>
                    <img className='howitwork_line' src={require('../../../assets/images/work.png')} alt="howitwork"/>
                    <i className="fa-solid fa-calendar-check howitwork_icon"></i>
                </div>
                <div className='steps__description col-lg-8'>
                    <h6>Choose Location</h6>
                    <h6>Pick-Up Date</h6>
                    <h6>Book your car</h6>
                </div>
           
            </div>

        </>
    )
}

export default Howitworks