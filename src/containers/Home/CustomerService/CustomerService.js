import React from 'react'
import '../CustomerService/style.css'
function CustomerService() {
    return (
        <>
            <div className='customer__service__container col-lg-12'>
                <div className='customer__header col-lg-7'>
                    <h1 className=' customer_main__title'>Customer Services</h1>
                    <h5 className='customer__subtitle '>Best customer service in the world</h5>
                    <hr className='customer__service__line'></hr>
                </div>
                <div className='customer__service_card-container col-lg-10'>
                    <div className='customer_service_card'>
                        <h3 ><i className="fa-solid fa-bomb customer_services_icon"></i> Special rates on car booking</h3>
                        <div className='customer_card-body'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                    </div>
                    <div className='customer_service_card'>
                        <h3> <i className="fa-solid fa-gift customer_services_icon"></i> Mobile Phone Reservation</h3>
                        <div className='customer_card-body'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                    </div>

                </div>
                <div className='customer__service_card-container col-lg-10'>
                    <div className='customer_service_card'>
                        <h3><i className="fa-solid fa-paper-plane customer_services_icon"></i> Unlimited Miles Car Rental
                        </h3>
                        <div className='customer_card-body'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                    </div>
                    <div className='customer_service_card'>
                 
                        <h3> <i className="fa-solid fa-bus customer_services_icon"></i>  One Way Car Rentals
                        </h3>
                      
                        <div className='customer_card-body'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomerService