import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import loginImage from "../../assets/images/background.jpg";



const home = () => {


const minTime = new Date ("01/02/2022 09:00 AM");

const maxTime  = new Date ("01/02/2022 05:00 PM");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [officiesList, setOfficiesList] = useState([]);

 

  const getOfficies = async () => {
    axios.get("https://localhost:44352/api/RentaCar")
      .then((res) => setOfficiesList(res.data));
  };

  useEffect(() => {
    getOfficies();

  }, []);



  return (

    <section className="container-fluid ">
      <div className="row ">
        <div className="background__image" style={{ backgroundImage: `url(${loginImage})`,backgroundSize: 'cover' }}>
          <div className="search__car__container ">
            <div className="row">
              <div className="offset-1 pick__up__office ">
                <form>
                
                  <select className="form-select" defaultValue=""   >
                    
                    <option value="" className='form-select__title' >Select Pick Up Office</option>
                    {officiesList.map((officiesItem, index) => {
                  
                      return <option key={index} value={officiesItem.id}>{officiesItem.name},{officiesItem.city}  </option>
   
                    })}
                  </select>
                </form>
                <form>
                  <select className="form-select " defaultValue="" id="officeform">
                    <option value=""  >Select Pick Up Office</option>
                    {officiesList.map((officiesItem, index) => {
                      return <option  key={index} value={officiesItem.id}>{officiesItem.name},{officiesItem.city}</option>

                    })}
                  </select>
                </form>
              </div>
            </div>
            <div className="row">
              <div className=" offset-2 time__date">
                <div className=" select__pick__up__date">
                  <div className="offset-1 date__pick__up">
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className='date' />
                  </div>
                  <div className="col-5 time__container">
                    <TimePickerComponent placeholder='Select Pick Up Time'
                    className='time'
                    min={minTime}
                    max={maxTime}
                    format='HH:mm'
                    ></TimePickerComponent>
                   
                  </div>
                </div>
                <div className=" select__pick__up__date">
                  <div className=" offset-1 date__pick__up">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date' />
                  </div>
                  <div className=" col-5 time__container">
                  <TimePickerComponent
                  placeholder='Select Pick Up Time'
                  className='time'
                  min={minTime}
                  max={maxTime}
                  format='HH:mm'
                  
                  ></TimePickerComponent>
                  </div>
                </div>
              </div>
              <div >
             
                <Link to="reservation"><button  className='car__search-button' type='button' >Search</button></Link> 
                </div>
             
            </div>
          </div>      
        </div>
      </div>

    </section>


  )
}
export default home;
