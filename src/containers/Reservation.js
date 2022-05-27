import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../assets/styles/components/reservation/style.css"


function cars() {
    const [carList, setCarList] = useState([]);

    const getCars = async () => {
        axios.get("https://localhost:44352/api/RentaCar/reservation?id=1")
            .then((res) => setCarList(res.data));
    };

    useEffect(() => {
        getCars();

    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="car__card">
                    {carList.map((carItem, index) => {

                        return <div className=" col-lg-4 col-md-5  card" key={index}>

                            <p className="car__classification ">{carItem.classification.type}</p>  {/*Değişecek*/}

                            <p className="car_name">{carItem.brand.name} EGEA</p>     {/*Değişecek*/}
                            <div className="slider">
                                <div className="slider__arrow">

                                    <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                                    <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                                </div>


                                <img className="card-img-top" src={carItem.imgURL} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <div className="card__features">
                                    <i className="fa-solid fa-gas-pump mt-1"></i>
                                    <p>{carItem.fuelType.type}</p> {/*Değişecek*/}
                                    <img className="mt-1 transmission__image" src={'../images/transmission.png'} />
                                    <p>{carItem.transmissionType.type}</p> {/*Değişecek*/}
                                    <i className="fa-solid fa-credit-card mt-1"></i>
                                    <p>Credit Card</p>
                                </div>
                                <div className="car__price">

                                    <p className="col-lg-5 total__price">1.4748,06 TL </p>  {/*Değişecek*/}

                                    <p className="col-lg-5 daily__price">{carItem.price} / Günlük</p>
                                </div>
                                <div className="pay__button-area">
                                    <button className="pay__button">Pay Now</button>
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