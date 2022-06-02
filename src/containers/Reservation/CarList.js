import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "../../assets/styles/components/reservation/style.css"
import Category from './Category';


function cars() {
    const search = window.location.search;
    const [carList, setCarList] = useState([]);
   console.log(search)



    const getCars = async () => {
        axios.get("https://localhost:44352/api/RentaCar/reservation" + search)
            .then((res) => setCarList(res.data))
    };

    useEffect(() => {
        getCars();

    }, []);

    return (

        <div className="row filter">
            <Category />
            <div className="col-lg-8 col-md-8 car__card">
                <div className='row'>

                    {
                        carList.map((carItem, index) => {
                            return <div className="card" key={index}>
                                <div className='row'>
                                    <p className="car__classification">{carItem.classification.type}</p>
                                    <p className="car_name">{carItem.brand.name} {carItem.carModal.name} </p>
                                    <div className="slider__arrow__container ">
                                        <div className='slider__arrow'>
                                            <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                                            <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                                        </div>
                                    </div>
                                    <div className='slider__container col-lg-6 col-md-9 col-sm-9 '>
                                        <div className="slider ">
                                            <img className="card-img-top" src={carItem.imgURL} alt="Card image cap" />
                                        </div>
                                    </div>
                                    <div className="card__features-body col-lg-6 col-md-12 col-sm-12">
                                        <div className="card__features ">
                                            <i className="fa-solid fa-gas-pump icons "></i>
                                            <p className='features'>{carItem.fuelType.type}</p>
                                            <img className="mt-1 transmission__image" src={'../images/transmission.png'} />
                                            <p className='features'>{carItem.transmissionType.type}</p>
                                            <i className="fa-solid fa-credit-card icons"></i>
                                            <p className='features'>Credit Card</p>
                                        </div>
                                        <div className="car__price">

                                            <span className=" total__price">1.4748,06 TL </span>

                                            <span className="daily__price">{carItem.price} / Günlük</span>
                                        </div>
                                        <div className="pay__button-area">
                                            <button className="pay__button">Pay Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                </div>

            </div>

        </div>


    )
}


export default cars;