import DatePicker from "react-datepicker";
import axios from 'axios';
import { Button } from 'bootstrap';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, parsePath, useParams } from 'react-router-dom';


import "../PayPage/style.css"
function Paypage() {
    const [startYear, setStartYear] = useState(new Date());
    var tax = 0.18;




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

        <div className='paypage__container '>
            <div className='row'>
                {oneCar.map((carItem) => {

                    return <>
                        <div className='col-lg-6 paypage__car__detail_cont' id={carItem.id}>
                            <div className='paypage__car__detail'>
                                <h2 className="d-flex justify-content-center">{carItem.carModal.brand.name} {carItem.carModal.name}</h2>
                                <div className='paypage__car__detail_features'>
                                    <h5><i className="fa-solid fa-gas-pump icons "></i>{carItem.fuelType.type}</h5>
                                    <h5><img className="transmission__image" src={process.env.PUBLIC_URL + '/images/transmission.png'} /> {carItem.transmissionType.type}</h5>
                                    <h5><i class="fa-solid fa-chart-simple"></i> {carItem.classification.type}</h5>
                                </div>
                            </div>
                            <div className="payment__car__img__cont">
                                <img className='paypage__img' src={carItem.carModal.imgURL} />
                            </div>
                        </div>
                        <div className='col-lg-4 receipt__summary__container'>
                            <div className='receipt__summary'>
                                <h3>Receipt Summary</h3>
                                <div className='paypage__car__price_details d-flex justify-content-between mt-5'>
                                    <div className='paypage__car__price_detail_featuresa'>
                                        <h5>{carItem.price} x {params.date} days</h5>
                                        <h5>Tax</h5>
                                        <hr></hr>
                                        <h3 style={{ color: "black" }}>TOTAL</h3>
                                    </div>
                                    <div className=''>
                                        <h5>{`${carItem.price * params.date}`} TL </h5>
                                        <h5>{`${carItem.price * params.date * tax}`}</h5>
                                        <hr></hr>
                                        <h5 style={{ color: "black" }}> {`${carItem.price * params.date + carItem.price * params.date * tax}`} TL </h5>
                                    </div>

                                </div>
                            </div>
                            <hr></hr>
                            <div className='payment__information__container  '>
                                <h4>Payment information</h4>
                                <Formik>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Name on credit card</label>
                                            <input type="text" class="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                        <label className="form-label">Credit Card Number</label>
                                        <div class="input-group mb-3">
                                            <input class="form-control" />
                                            <span class="input-group-text"><img src={require('../../assets/images/mastercard.png')} className=" payment__mastercard_img "></img></span>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Expires on</label>
                                            <div className="d-flex">
                                                <DatePicker
                                                    selected={startYear}
                                                    onChange={(date) => setStartYear(date)}
                                                    dateFormat="MM/yyyy"
                                                    showMonthYearPicker
                                                    showFullMonthYearPicker />
                                            </div>
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <label className="form-label">CVC</label>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                        <button type="submit" className="payment__button"><i class="fa-solid fa-lock"></i> BOOK SECURELY</button>
                                    </form>
                                </Formik>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>

    )
}

export default Paypage