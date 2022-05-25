import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/styles/components/home/style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const home = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [officiesList, setOfficiesList] = useState([]);

  const [selected,setSelected]=useState(null);


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
            <div className="background__image">
                <div className="search__car__container">
                    <div className="row">
                        <div className="offset-1 pick__up__office">
                          <select className="form-select"  defaultValue={'DEFAULT'} >
                            <option selected value={selected} onChange={setSelected}>Select Pick Up Office</option>
                            {officiesList.map((officiesItem, index) => {
                                    return    <option key={index} value={index+1}>{officiesItem.name},{officiesItem.city}</option> 
                                               
                                              })}
                          </select>
                              <select className="form-select"  >
                                <option selected>Select Pick Up Office</option>
                                {officiesList.map((officiesItem, index) => {
                                    return    <option key={index} value={index+1}>{officiesItem.name},{officiesItem.city}</option> 
                                               
                                              })}
                              </select>
                            </div>
                        </div>
                        <div className="row">
                          <div className=" offset-2 pick__up__date">
                              <div className=" select__pick__up__date">
                                  <div className="offset-1 date__pick__up">
                                  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                                  </div>
                                  <div className="col-2">
                                      <div className="dropdown ">
                                          <button className="dropdown__hour btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                           Pick Up Hour
                                          </button>
                                          <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">20:00 am</a></li>
                                            <li><a className="dropdown-item" href="#">10:00 am</a></li>
                                            <li><a className="dropdown-item" href="#">5:00 pm </a></li>
                                          </ul>
                                        </div>
                                  </div>
                              </div>
                              <div className=" select__pick__up__date">
                                  <div className="col-2 offset-1 date__pick__up">
                                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                  </div>
                                  <div className="offset-5 col-2">
                                      <div className="dropdown ">
                                          <button className="dropdown__hour btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                           Drop Off Hour
                                          </button>
                                          <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
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





    // <section className="container-fluid ">
    //   <div className="row ">
    //     <div className="background__image">
    //       <div className="search__car__container">
    //         <div className="row">
    //           <div className="offset-1 pick__up__office">
    //             <div className="col-5 offset-1 select__pick__up__office">
    //             <select className="form-select" aria-label="Default select example">
    //                         <option selected>Select Pick Up Office</option>
    //                         {officiesList.map((officiesItem, index,num) => {
                          
    //                       return    <option key={index} value={num}>{officiesItem.name},{officiesItem.city}</option> 
                         
    //                     })}
    //                     </select>

    //             <div className="col-5 offset-1 select__pick__up__office">
    //               <select className="form-select" aria-label="Default select example">
    //                 <option selected> Select Drop Off Office</option>
    //                 {officiesList.map((officiesItem, index,num) => {
                          
    //                       return    <option key={index} value={num}>{officiesItem.name},{officiesItem.city}</option> 
                         
    //                     })}
                      
                 

    //               </select>
                
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className=" offset-4 pick__up__date">
    //             <div className=" select__pick__up__date">
    //               <div className=" offset-1 date__pick__up">


    //                 <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

    //               </div>

    //               <div className="col-4">
    //                 <div className="dropdown ">


    //                 </div>
    //               </div>
    //             </div>
    //             <div className=" select__pick__up__date">
    //               <div className="offset-1 date__pick__up">
    //                 <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    //               </div>
    //               <div className="col-2">
    //                 <div className="dropdown ">
    //                   <button className="dropdown__hour btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    //                     Drop Off Hour
    //                   </button>
    //                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //                     <li><a className="dropdown-item" href="#">20:00 am </a></li>
    //                     <li><a className="dropdown-item" href="#">10:00 am</a></li>
    //                     <li><a className="dropdown-item" href="#">5:00 pm</a></li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>


    //       </div>
    //       <div>  <Link to="reservation"><button>Search</button></Link> </div>
    //     </div>

    //   </div>
    //   </div>
    // </section>
  )
}
export default home;
