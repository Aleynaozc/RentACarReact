import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'
import axios from 'axios'

import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import loginImage from "../../assets/images/background.jpg";
import { Formik, Form } from 'formik';
import { Link, useNavigate } from "react-router-dom"


const home = () => {


  const minTime = new Date("01/02/2022 09:00 AM");

  const maxTime = new Date("01/02/2022 05:00 PM");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [officiesList, setOfficiesList] = useState([]);

  const navigate = useNavigate();


  const getOfficies = async (e) => {
    axios.get(`https://localhost:44352/api/RentaCar`)
      .then((res) => {

        setOfficiesList(res.data)
        console.log(res.data)

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

  const handleOnSubmit = () => { };


  return (

    <section className="container-fluid ">
      <div className="row">
        <div className="background__image" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover' }}>
          <Formik
            initialValues={{
              location: ""
            }}
            onSubmit={(values) => {
              openofficies(values);
            }}
          >
            {({ handleChange }) => (

              <Form >
                <div className="search__car__container">
                  <div className="col-lg-4 col-md-4">
                    <p className='form-select-title'>Select Pick-up office</p>

                    <select className="form-select" name="location" onChange={handleChange}>
                    <option selected>Select Pick Up Officies</option>
                      {officiesList.map((officiesItem, index) => {

                        return <option
                          key={index} value={officiesItem.id}  >{officiesItem.id} 
                          {officiesItem.name},{officiesItem.city}
                        </option>
                      })}

                    </select>

                    <p className='form-select-title'>Select return office</p>

                    <select className="form-select " name="officies" onChange={handleChange} >
                      {officiesList.map((officiesItem, index) => {
                        return <option key={index} value={officiesItem.name}> {officiesItem.name},{officiesItem.city}</option>
                      })}
                    </select>

                  </div>
                  <div className="col-lg-4 col-md-4  time_date">
                    <p className='form-select-title'>Select Pick-up time</p>
                    <div className='date__cont'>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date' />
                    </div>
                    <p className='form-select-title'>Select return office</p>
                    <div className='date__cont'>
                      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className='date' />
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
                    className='car__search-button'
                    id='searchbtn'
                    type='submit'
                  >
                    Search
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
