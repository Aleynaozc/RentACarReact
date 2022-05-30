import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import loginImage from "../../assets/images/background.jpg";



const home = () => {


  const minTime = new Date("01/02/2022 09:00 AM");

  const maxTime = new Date("01/02/2022 05:00 PM");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [officiesList, setOfficiesList] = useState([]);
  const [status, setStatus] = useState('');
  const [dropoff, setDropOff] = useState('')
 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status)
  }

  const handleDropOff = (e) => {
    e.preventDefault();
    console.log(dropoff)
  }
  const getOfficies = async () => {
    axios.get("https://localhost:44352/api/RentaCar")
      .then((res) => {
        setOfficiesList(res.data)

        
      });
  };

  useEffect(() => {
    getOfficies();

  }, []);



  return (

    <section className="container-fluid ">
      <div className="row">
        <div className="background__image" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover' }}>
          <div className="search__car__container">
            <div className="col-lg-4 col-md-4">
              <p className='form-select-title'>Select Pick-up office</p>
              <form onSubmit={(e) => handleSubmit(e)} >
                <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} >
                  {officiesList.map((officiesItem, index) => {
                    return <option key={index} value={officiesItem.id}>{officiesItem.name},{officiesItem.city}  </option>
                  })}
                </select>
              </form>
              <p className='form-select-title'>Select return office</p>
              <form onSubmit={(e) => handleDropOff(e)} >
                <select className="form-select " value={dropoff} onChange={(e) => setDropOff(e.target.value)}>
                  {officiesList.map((officiesItem, index) => {
                    return <option key={index} value={officiesItem.id}>{officiesItem.name},{officiesItem.city}</option>
                  })}
                </select>
              </form>
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
            <div>
            </div>
          </div>
         
          <Link to="reservation"><button value="" className='car__search-button' id='searchbtn' type='button' >Search</button></Link>
        </div>

      </div>

    </section>


  )
}
export default home;
