
import axios from 'axios';
import { Form } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import "../../assets/styles/components/reservation/style.css"
import Category from './Category';


function cars() {
    const search = window.location.search;
    const dates = new URLSearchParams(window.location.search)
    

    var startDate = dates.get("startDate");
    var endDate = dates.get("endDate");

    const newEndDate = new Date(endDate);
    const newStartDate = new Date(startDate);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = newEndDate - newStartDate

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    const [carList, setCarList] = useState([]);
const jdhrf="https://localhost:44352/api/RentaCar/reservation" + search;
    const getCars = async () => {
       axios.get(jdhrf)
            .then((res) => setCarList(res.data))
    };

    useEffect(() => {
        getCars();

    }, []);

    const navigate = useNavigate();
    const openofficies = (values) => {

        var params = new URLSearchParams();
        Object.keys(values).forEach((key) => {
          params.append(key, values[key]);
        });
        navigate("/paypage?" + params.toString());
      }
    
   

  



    //FILTERED
    const [selectedCategory, setSelectedCategory] = useState({
        transmissionType: [],
        fuelType: [],
        classification: [],
    });

   

    function getFilteredList() {
        let testList = carList;

        Object.keys(selectedCategory).forEach(catType => {
            if (selectedCategory[catType].length > 0) {
                testList = testList.filter(car => {
                    if (selectedCategory[catType].findIndex(sc => sc == car[catType].type) != -1) return car
                });
            }
        })


        return testList;
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, carList]);




    const [filterSearch, setFilterSearch] = useState('');

    // the search result
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = carList.filter((user) => {
                return user.transmissionType.type.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.fuelType.type.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.fuelType.type.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.classification.type.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.brand.name.toLowerCase().startsWith(keyword.toLowerCase());

            });
            setCarList(results);
        } else {
            getCars();

        }

        setFilterSearch(keyword);
    };




    return (
        <div>
            <div className='row'>
                <div className='search__button_area'>
                    <input
                        type="search"
                        value={filterSearch}
                        onChange={filter}
                        className="search__button"
                        placeholder="Seacrh"
                    />
                </div>


                <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <div className="col-lg-8 col-md-8  car__card">

                    <div className='row'>

                        {
                            filteredList.map((carItem) => {

                                return <>

                                    <div className="card" key={carItem.id}>
                                        <p id={carItem.id} hidden></p>
                                        <p className="car__classification">{carItem.classification.type}</p>
                                        <p className="car_name">{carItem.brand.name} {carItem.carModal.name} </p>

                                        <div className="slider__arrow__container col-lg-6">
                                            <div className='slider__arrow'>
                                                <i className="fa-solid fa-circle-arrow-left arrows" ></i>
                                                <i className="fa-solid fa-circle-arrow-right arrows" ></i>
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='slider__container col-lg-6'>
                                                <div className="slider ">
                                                    <img className="card-img-top" src={carItem.carModal.imgURL} alt="Card image cap" />
                                                </div>
                                            </div>

                                            <div className="card__features-body  col-lg-6 col-md-12 col-sm-10">
                                                <div className="card__features ">
                                                    <i className="fa-solid fa-gas-pump icons "></i>
                                                    <p className='features'>{carItem.fuelType.type}</p>
                                                    <img className="mt-1 transmission__image" src={'../images/transmission.png'} />
                                                    <p className='features'>{carItem.transmissionType.type} </p>
                                                    <i className="fa-solid fa-credit-card icons"></i>
                                                    <p className='features'>Credit Card</p>
                                                </div>
                                                <div className="car__price">

                                                    <span className=" total__price">{diffInDays === 0 ? carItem.price : carItem.price * diffInDays} TL </span>

                                                    <span className="daily__price">{carItem.price} / Daily</span>
                                                </div>
                                                <div className="pay__button-area">
                                                    <Link to={`paypage/${carItem.id}/${diffInDays}`}
                                                 
                                                    >
                                                    <button value={carItem.id}   type="submit" className="pay__button">Pay Now</button>
                                                    </Link>
                                                   
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            })}
                    </div>

                </div>

            </div>
        </div>

    )
}


export default cars;