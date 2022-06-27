import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns"
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'


import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getAllOfficies } from '../../services/store/car';
import CustomerService from './CustomerService/CustomerService';
import Howitworks from './HowItWorks/Howitworks';
import HomeCarSlide from './CarSlide/HomeCarSlide';
import Slider from 'react-slick';






const home = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonText, setButtonText] = useState('Search')
  const minTime = new Date("01/02/2022 09:00 AM");
  const maxTime = new Date("01/02/2022 05:00 PM");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Get all Officies 
  const officies = useSelector(state => state.car.allOfficies);

  //Error Massages
  let validationSchema = yup.object({
    location: yup.string().required("Please Select Officies"),
    startTime: yup.string().required("Please Select Time"),
  })


  //Total day price 
  const handleClick = (values) => {
    const oneDayRent = 1;

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = values.endDate - values.startDate

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    setButtonText(
      `${diffInDays <= 0 ? `For ${oneDayRent} Day` : `For ${diffInDays} Day`}`);
  }

  // const getOfficies = async (e) => {
  //   axios.get(`https://localhost:44352/api/RentaCar`)
  //     .then((res) => {

  //       setOfficiesList(res.data)


  //     });
  // };

  //CreateParams when selected officies
  const openofficies = (values) => {

    var params = new URLSearchParams();
    Object.keys(values).forEach((key) => {
      params.append(key, values[key]);
    });
    navigate("/reservation?" + params.toString());
  }



  // Create a Scroll To Top Button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });

  };

  const scrollToReservation = () => {
    window.scrollTo({
      top: 230,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  useEffect(() => {
    dispatch(getAllOfficies())
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      }

      else {
        setShowButton(false);
      }
    });
  }, [dispatch]);


  var settings = {
    slidesToShow: 1,
   
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 10000,
    speed: 3000,
  };


  function SampleNextArrow(props) {
    const { className, style} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
  }
  return (
    <div className=' '>
   
      <div className=" ">
        <div className="home__slide__bg ">
        <Slider {...settings}>
        <img className='background__image' src= {require('../../assets/images/bg23.jpg')}></img>
        <img className='background__image' src= {require('../../assets/images/bg21.jpg')}></img>
        </Slider>
          <div className='slogan__container col-lg-5'>
            <p className='slogan__main__title'> Save <span className='big'>big</span> with our car rental</p>
            <button onClick={scrollToReservation} className='book_ride_btn'>Book a Ride</button>
          </div>
        </div>
      </div>
      <div className='as'>
        <div className=' reservation__container'>
          <span className='flag'>SAVE 15% if you prepay your booking</span>
          <Formik
            initialValues={{
              location: "",
              startDate: new Date(),
              endDate: new Date(),
              startTime: "",
              endTime: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              openofficies(values);
            }}
          >
            {({ handleChange, values, setFieldValue, errors, touched }) => (
              <Form>
                {errors.location && touched.location ? <span className='d-flex justify-content-center error-massage '>{errors.location}</span> : null}
                {errors.startTime && touched.startTime ? <span className='time-error-massage'>{errors.startTime}</span> : null}
                <div className="search__car__container ">
                  <div className="col-lg-4 col-md-5 col-sm-10 col-12">
                    <p className='form-select-title'><i className="fa-solid fa-location-dot search_car_icons"></i> Pick-up Office</p>
                    <select className="form-select" name="location" onChange={handleChange}>
                      <option selected> Pick-Up </option>
                      {officies.map((officiesItem, index) => {
                        return <option
                          key={index} value={officiesItem.name}>
                          {officiesItem.name},{officiesItem.city}
                        </option>
                      })}
                    </select>
                    <p className='form-select-title'><i className="fa-solid fa-location-dot search_car_icons"></i> Drop-Of Office</p>
                    <select className="form-select " name="officies" onChange={handleChange}>
                      <option selected>Drop-Of</option>
                      {officies.map((officiesItem, index) => {
                        return <option key={index} value={officiesItem.name}> {officiesItem.name},{officiesItem.city}</option>
                      })}
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-10 time_date">
                    <p className='form-select-title'><i className="fa-solid fa-calendar-days search_car_icons"></i>  Pick-Up</p>
                    <div className='date__cont'>
                      <DatePicker
                        showDisabledMonthNavigation
                        onCalendarClose={() => { handleClick(values) }}
                        onChange={(date) => { setFieldValue("startDate", date) }}
                        className='date'
                        name="startDate"
                        selected={values.startDate}
                        minDate={new Date()}
                        value={values.startDate}
                      />
                    </div>
                    <p className='form-select-title'><i className="fa-solid fa-calendar-days search_car_icons"></i> Drop-Of</p>
                    <div className='date__cont' >
                      <DatePicker
                        onCalendarClose={() => { handleClick(values) }}
                        onChange={(date) => { setFieldValue("endDate", date) }}
                        excludeDates={[addDays(new Date(), 0)]}
                        value={values.endDate}
                        selected={values.startDate > values.endDate ? values.startDate : values.endDate}
                        minDate={values.startDate}
                        name="endDate"
                        className='date' />
                    </div>
                  </div>
                  <div className=" col-lg-3 col-md-4 col-sm-10 col-12 time">
                    <div>
                      <TimePickerComponent
                        placeholder='Select Pick Up Time'
                        onChange={handleChange}
                        name='startTime'
                        min={minTime}
                        max={maxTime}
                        format='HH:mm'
                        className='times'
                      />
                      <TimePickerComponent
                        placeholder='Select Drop Off Time'
                        onChange={handleChange}
                        value={values.startTime}
                        name='endTime'
                        min={minTime}
                        max={maxTime}
                        format='HH:mm'
                        className='times'
                      />
                    </div>
                  </div>
                  <button
                    className='car__search-button col-lg-2 col-md-3'
                    id='searchbtn'
                    type='submit'
                    name='btndate'
                  >
                    {buttonText}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='home__customer__services__area'>
        <CustomerService></CustomerService>
      </div>
      <div className='home__howitwork__area'>
        <Howitworks></Howitworks>
      </div>
      <div className='home__ourcars__area'>
        <HomeCarSlide></HomeCarSlide>
      </div>
     <div className='back_to_top_button'>
     {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
     </div>
      
    </div>
  )
}
export default home;
