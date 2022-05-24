import React from 'react';
import '../assets/styles/components/car.css';

function cars() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="car__card">
                <div className=" col-lg-4 col-md-5  card" style={{background:"black"}} >
                   
                    <p className="car__classNameification ">EKONOMİK</p> 
                        
                    <p className="car_name">FIAT EGEA</p>         
                    <div className="slider">
                    <div className="slider__arrow">
                  
                        <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                        <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                    </div>   
                   
                  
                    <img className="card-img-top" src="/"  alt="Card image cap"/> 
                </div>
                    <div className="card-body">
                        <div className="card__features">
                            <i className="fa-solid fa-gas-pump mt-1"></i>
                            <p>Disel</p>
                               <img src="/src/assets/images/bg.jpg" className="mt-1"/>
                           <p>Manual</p>
                           <i className="fa-solid fa-credit-card mt-1"></i>
                           <p>Credit Card</p>
                        </div>
                        <div className="car__price">
                           
                            <p className="col-lg-5 total__price">1.4748,06 TL </p> 
                            
                            <p className="col-lg-5 daily__price">732 TL / Günlük</p> 
                        </div>
                        <div className="pay__button-area">
                            <button className="pay__button">Pay Now</button>
                        </div>
                    </div>
                </div>


                <div className=" col-lg-4 col-md-5  card" >
                    <p className="car__classNameification ">KONFOR</p> 
                    <p className="car_name">BMW 2 SERİSİ</p> 
                    <div className="slider">
                    <div className="slider__arrow">
                        <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                        <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                    </div>
                    <img className="card-img-top" src="assets/images/bmw2.png" alt="Card image cap"/> 
                </div>
                    <div className="card-body">
                        <div className="card__features">
                            <i className="fa-solid fa-gas-pump mt-1"></i>
                            <p>Disel</p>
                               <img src="assets/images/manual-transmission.png"  className="mt-1"/>
                           <p>Manual</p>
                           <i className="fa-solid fa-credit-card mt-1"></i>
                           <p>Credit Card</p>
                        </div>
                        <div className="car__price">
                            <p className="col-lg-5 total__price">1.4748,06 TL </p> 
                            <p className="col-lg-5 daily__price">732 TL / Günlük</p>
                        </div>
                        <div className="pay__button-area">
                            <button className="pay__button">Pay Now</button>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-5  card" >
                    <p className="car__classNameification ">PRESTIJ</p> 
                    <p className="car_name">AUDI Q8</p>   
                    <div className="slider">
                    <div className="slider__arrow">
                        <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                        <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                    </div> 
                    <img className="card-img-top" src="" alt="Card image cap"/>
                </div>
                    <div className="card-body">
                        <div className="card__features">
                            <i className="fa-solid fa-gas-pump mt-1"></i>
                            <p>Disel</p>
                               <img src='/src/assets/images/bmw2.png' className="mt-1"/>
                           <p>Manual</p>
                           <i className="fa-solid fa-credit-card mt-1"></i>
                           <p>Credit Card</p>
                        </div>
                        <div className="car__price">
                            <p className="col-lg-5 total__price">1.4748,06 TL </p>   
                            <p className="col-lg-5 daily__price">732 TL / Günlük</p> 
                        </div>
                        <div className="pay__button-area">
                            <button className="pay__button">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default cars;