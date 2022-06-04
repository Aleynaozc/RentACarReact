import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { addMonths, addDays } from "date-fns"
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'
import axios from 'axios'

import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import loginImage from "../../assets/images/background.jpg";
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom"


const home = () => {


  const minTime = new Date("01/02/2022 09:00 AM");

  const maxTime = new Date("01/02/2022 05:00 PM");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [officiesList, setOfficiesList] = useState([]);

  const [buttonText, setButtonText] = useState('Search')

  const navigate = useNavigate();


const handleClick = (values)   => {

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = values.endDate - values.startDate

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    setButtonText(`For ${diffInDays} Day`);

  }









  const getOfficies = async (e) => {
    axios.get(`https://localhost:44352/api/RentaCar`)
      .then((res) => {

        setOfficiesList(res.data)


      });
  };
  const openofficies = (values) => {

    var params = new URLSearchParams();
    Object.keys(values).forEach((key) => {
      params.append(key, values[key]);
    });
    navigate("/reservation?" + params.toString());
  }




  useEffect(() => {
    getOfficies();


  }, []);



  return (

    <section className="container-fluid ">
      <div className="row">
        <div className="background__image" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover' }}>
          <Formik
            initialValues={{
              location: "",
              startDate: new Date(),
              endDate: new Date(),
            }}
            onSubmit={(values) => {
              openofficies(values);
             
           
            }}
          >
            {({ handleChange, values, setFieldValue}) => (

              <Form >
                <div className="search__car__container">
                  <div className="col-lg-4 col-md-4">
                    <p className='form-select-title'>Select Pick-up office</p>

                    <select className="form-select" name="location" onChange={handleChange}>
                      <option selected>Select Pick Up Officies</option>
                      {officiesList.map((officiesItem, index) => {

                        return <option
                          key={index} value={officiesItem.name}  >
                          {officiesItem.name},{officiesItem.city}
                        </option>
                      })}

                    </select>

                    <p className='form-select-title'>Select return office</p>

                    <select className="form-select " name="officies" onChange={handleChange}>
                      <option selected>Select Drop Off Officies</option>
                      {officiesList.map((officiesItem, index) => {
                        return <option key={index} value={officiesItem.name}> {officiesItem.name},{officiesItem.city}</option>
                      })}
                    </select>

                  </div>
                  <div className="col-lg-4 col-md-4  time_date">
                    <p className='form-select-title'>Select Pick-up time</p>
                    <div className='date__cont'>
                      <DatePicker
                        showDisabledMonthNavigation
                        onChange={(date) => { setFieldValue("startDate",date) }}
                        className='date'
                        name="startDate"
                        selected={values.startDate}
                        minDate={new Date()}
                        value={values.startDate}
                      />
                    </div>
                    <p className='form-select-title'>Select return office</p>
                    <div className='date__cont' >
                      <DatePicker
                        onCalendarClose={()=> {handleClick(values)}}
                        onChange={(date) => { setFieldValue("endDate",date) }}
                        excludeDates={[addDays(new Date(), 0)]}
                        value={values.endDate}
                        selected={values.endDate}
                        minDate={values.startDate}
                        name="endDate"
                        className='date' />
                    </div>
                  </div>

                  <div className=" col-lg-3 col-md-3 col-sm-3 time">
                    <TimePickerComponent placeholder='Select Pick Up Time'

                      min={minTime}
                      max={maxTime}
                      format='HH:mm'
                    />
                    <TimePickerComponent
                      placeholder='Select Drop Off Time'
                      min={minTime}
                      max={maxTime}
                      format='HH:mm'
                    />
                  </div>


                  <button
                    className='car__search-button col-3'
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

    </section>


  )
}
export default home;
