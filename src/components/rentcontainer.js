import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/styles/components/rentcontainer.css'



const rentcontainer = ({ officiesList }) => {

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());





  return (
    <section className="container-fluid ">
      <div className="row ">
        <div className="background__image">
          <div className="search__car__container">
            <div className="row">
              <div className="offset-1 pick__up__office">
                <div className="col-5 offset-1 select__pick__up__office">
                  <div className="dropdown ">
                    <button className="dropdown__pick__up__office btn  dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Select Pick Up Office
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {officiesList.map((officiesItem, index) => {

                        return <li key={index}> <a className="dropdown-item" href="#">{officiesItem.name},{officiesItem.city}</a></li>

                      })}

                    </ul>
                  </div>

                </div>
                <div className="col-5 offset-1 select__pick__up__office">
                  <div className="dropdown ">
                    <button className="dropdown__pick__up__office btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Select Drop Off Office
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {officiesList.map((officiesItem, index) => {

                        return <li key={index}> <a className="dropdown-item" href="#">{officiesItem.name},{officiesItem.city}</a></li>

                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" offset-4 pick__up__date">
                <div className=" select__pick__up__date">
                  <div className=" offset-1 date__pick__up">


                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                  </div>

                  <div className="col-4">
                    <div className="dropdown ">
                   
                      
                    </div>
                  </div>
                </div>
                <div className=" select__pick__up__date">
                  <div className="offset-1 date__pick__up">
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                  </div>
                  <div className="col-2">
                    <div className="dropdown ">
                      <button className="dropdown__hour btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Drop Off Hour
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">20:00 am </a></li>
                        <li><a className="dropdown-item" href="#">10:00 am</a></li>
                        <li><a className="dropdown-item" href="#">5:00 pm</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default rentcontainer;
