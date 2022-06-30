import React, { useEffect } from 'react'
import "../CarSlide/HomeCarSlide.css"
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../../services/store/car';
function HomeCarSlideButton() {
 
  var settings = {
    slidesToShow: 3,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
  };
  const dispatch=useDispatch();
    const cars = useSelector(state => state.car.allCars);
  
    useEffect(() => {
        
        dispatch(getAllCars())
       }, [dispatch]);
       

  return (
    <div className='slider__cont' >
      <h2 className='home__car__slide__title '>OUR CARS</h2>
      <div className='home__car__slide__container'>
      <div >
        <Slider {...settings}>
        {cars.map((carItem,index) => {         
          return <div className='car__slide__card__area' key={index} >
                <div className='car__slide__card' >
                <img className='slide__cars_img' src={carItem.carModal.imgURL} alt="car-image"></img>
                <h6 className='slide__cars__name'>{carItem.carModal.brand.name} {carItem.carModal.name}</h6>
                <p className='slide__cars__pride'>{carItem.price} TL / Daily</p>
            </div>
            </div>
               
          })}
        </Slider>
      </div>
      </div>
    </div>
  )
}

export default HomeCarSlideButton