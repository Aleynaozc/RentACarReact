
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../../assets/styles/components/cardetailpage/style.css"
function CarDetailPage() {
    const params = useParams();
    const [oneCar, setOneCar] = useState([])
    const fh = `https://localhost:44352/api/RentaCar/ListOneCar?searchId=${params.cardID}`
    const getOneCars = async () => {
        axios.get(fh)
            .then((res) => setOneCar(res.data))
    };
    useEffect(() => {
        getOneCars();

    }, []);
    return (

        <>
            <Formik>
                <div className="car__detail__page__area">
                    {
                        oneCar.map((carItem) => {
                            return <div id={carItem.id} className="row m-0" >
                                <div className='col-lg-7'>
                                    <div className="detail__page_image_container">
                                        <img className="car__card-img-top" src={carItem.carModal.imgURL} alt="Card image cap" />
                                    </div>
                                </div>
                                <div className="detail__page__card-body col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 row">
                                        <div className='detail__page_prop col-lg-4'>
                                        <p className="detail__page_car__classification">{carItem.classification.type}</p>
                                        <p className="detail__page_car_name">{carItem.carModal.brand.name} {carItem.carModal.name} </p>
                                        </div>
                                      
                                        <div className=" col-lg-5 ">
                                          
                                         <div className='detail__page_car_properties'>
                                            <div >
                                            <p className='features'><i className="fa-solid fa-gas-pump icons "></i>{carItem.fuelType.type}</p>
                                            <p className='features'><img className="mt-1 transmission__image" src={'../images/transmission.png'} />{carItem.transmissionType.type}</p>
                                            <p className='features'><i class="fa-solid fa-users"></i> {carItem.carModal.seats}   Seats </p>
                                            <p className='features'> <i class="fa-solid fa-suitcase-rolling"></i> {carItem.carModal.luggage}  Luggage</p>
                                           
                                            <p className='features'><i className="fa-solid fa-credit-card icons"></i>Credit Card</p>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="show__detail_button-area">
                                            <div className="car_detail__price">
                                                <span className="car_detail_daily__price"> {carItem.price} TL / Daily</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        })}
                </div>
            </Formik>
        </>
    )
}


export default CarDetailPage