import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import {addDays} from "date-fns"
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'


import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import loginImage from "../../assets/images/background.jpg";
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getAllOfficies } from '../../services/store/car';




const home = () => {


  const minTime = new Date("01/02/2022 09:00 AM");

  const maxTime = new Date("01/02/2022 05:00 PM");

  const [buttonText, setButtonText] = useState('Search')

  const navigate = useNavigate();

  let  validationSchema =yup.object({
   location: yup.string().required("Please Select Officies"),
   startTime: yup.string().required("Please Select Time"),
  
 
  })
const handleClick = (values)   => {
  const oneDayRent = 1;

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = values.endDate - values.startDate

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    setButtonText( 
      `${ diffInDays <= 0 ? `For ${oneDayRent} Day`:`For ${diffInDays} Day` }`);

  }









  // const getOfficies = async (e) => {
  //   axios.get(`https://localhost:44352/api/RentaCar`)
  //     .then((res) => {

  //       setOfficiesList(res.data)


  //     });
  // };
  const openofficies = (values) => {

    var params = new URLSearchParams();
    Object.keys(values).forEach((key) => {
      params.append(key, values[key]);
    });
    navigate("/reservation?" + params.toString());
  }

  const dispatch=useDispatch();
  const officies = useSelector(state => state.car.allOfficies);


  useEffect(() => {
   dispatch(getAllOfficies())
  
  }, [dispatch]);

  


  // useEffect(() => {
  //   getOfficies();


  // }, []);



  return (

    <section className="container-fluid ">
      <div className="row">
        <div className="background__image" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover' }}>
      
          <Formik
            initialValues={{
              location: "",
              startDate: new Date(),
              endDate: new Date(),
              startTime:"",
              endTime:""
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              openofficies(values);
             
           
            }}
          >
            {({ handleChange, values, setFieldValue,errors,touched}) => (

              <Form >
                {errors.location && touched.location? <span className='d-flex justify-content-center error-massage '>{errors.location}</span>:null}
                {errors.startTime && touched.startTime? <span className='time-error-massage'>{errors.startTime}</span>:null}
                <div className="search__car__container">

                  <div className="col-lg-4 col-md-4">
                
                    <p className='form-select-title'>Select Pick-up office</p>

                    <select className="form-select" name="location" onChange={handleChange}>
                      <option selected>Select Pick Up Officies</option>
                      {officies.map((officiesItem, index) => {

                        return <option
                          key={index} value={officiesItem.name}  >
                          {officiesItem.name},{officiesItem.city}
                        </option>
                      })}

                    </select>
                   
                    <p className='form-select-title'>Select return office</p>

                    <select className="form-select " name="officies" onChange={handleChange}>
                      <option selected>Select Drop Off Officies</option>
                      {officies.map((officiesItem, index) => {
                        return <option key={index}  value={officiesItem.name}> {officiesItem.name},{officiesItem.city}</option>
                      })}
                    </select>
                   

                  </div>
                  <div className="col-lg-4 col-md-4  time_date">
                    <p className='form-select-title'>Select Pick-up time</p>
                    <div className='date__cont'>
                      <DatePicker
                        showDisabledMonthNavigation
                        onCalendarClose={()=> {handleClick(values)}}
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
                        selected={values.startDate>values.endDate? values.startDate : values.endDate}
                        minDate={values.startDate}
                        name="endDate"
                        className='date' />
                    </div>
                  </div>
             
                
                  <div className=" col-lg-3 col-md-3 col-sm-3 time">
   
                <div>
                    <TimePickerComponent
                     placeholder='Select Pick Up Time'
                     onChange={handleChange}
                     name='startTime'
                      min={minTime}
                      max={maxTime}
                      format='HH:mm'
                    />
                   
                    <TimePickerComponent
                      placeholder='Select Drop Off Time'
                      onChange={handleChange}
                      value={values.startTime}
                      name='endTime'
                      min={minTime}
                      max={maxTime}
                      format='HH:mm'
                    />
                    </div>
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
