

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import "../../assets/styles/components/allCars/style.css"

const AllCars = () => {
    const [allCarList, setAllCarList] = useState([]);
    const getCars = async () => {
        axios.get("https://localhost:44352/api/RentaCar/Listcar")
            .then((res) => setAllCarList(res.data))
    };

    useEffect(() => {
        getCars();

    }, []);

    return (

        <div className="row ">
            <div className="col-lg-5 col-md-5  all_car__list">

              

                {
                        allCarList.map((carItem, index) => {
                            
                            return    <div className="all_car-card " >
                            <p className="car__classification">{carItem.classification.type}</p>
                            <p className="car_name">{carItem.brand.name} {carItem.carModal.name} </p>
        
                            <div className="allCar__slider__arrow__container">
        
                                <i className="fa-solid fa-circle-arrow-left allcar__arrows" ></i>
                                <i className="fa-solid fa-circle-arrow-right allcar__arrows " ></i>
                            </div>
                            <div className='car_slider__container'>
                                <div className="car__slider">
                                    <img className="car__card-img-top" src={carItem.carModal.imgURL} alt="Card image cap" />
                                </div>
                            </div>
                             <div className="allcar__card-body">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="mt-2 allCar_card__features ">
                                        <i className="fa-solid fa-gas-pump icons "></i>
                                        <p className='features'>{carItem.fuelType.type}</p>
                                        <img className="mt-1 transmission__image" src={'../images/transmission.png'} />
                                        <p className='features'>{carItem.transmissionType.type}</p>
                                        <i className="fa-solid fa-credit-card icons"></i>
                                        <p className='features'>Credit Card</p>
                                    </div>
                                    <div className="car__price">
        
                                        
        
                                        <span className="allCar_daily__price"> {carItem.price} TL / Daily</span>
                                    </div>
                                    <div className="pay__button-area">
                                    <Link to="/">
                                     <button className="pay__button">Pay Now</button>
                                      </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
            </div>

        </div>




    )
}

export default AllCars