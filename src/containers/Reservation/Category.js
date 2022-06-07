
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Category({selectedCategory,setSelectedCategory}) {
    const search = window.location.search;
    const [carList, setCarList] = useState([]);   

  
    const getCars = async () => {
        axios.get("https://localhost:44352/api/RentaCar/reservation" + search)
            .then((res) => setCarList(res.data))
    };
     useEffect(() => {
        getCars();

    }, []);
  
    function handleCategoryChange(event) { 
           if(event.target.checked)
           {
               setSelectedCategory(event.target.value);
           } 
        
     }
 
  
    return (

        <div className='col-lg-4 col-md-4 filter__container'>
            <h3 className=''>Choose a Vehicle Class</h3>
            <div className='filter__categories'>
                <h4 className='filter__title'>FILTERS</h4>
                <div className='categories'>
                    <div className='categories__item'>
                        <h5>Transmission Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom'  value='Automatic'    onChange={ handleCategoryChange }  />
                            <span className="form-check-label" for="flexCheckDefault"  >
                                Automatic
                            </span>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Manual' onChange={handleCategoryChange} />
                            <label className="form-check-label" for="flexCheckChecked">
                                Manual
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Fuel Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Gasoline' onChange={handleCategoryChange} />
                            <label className="form-check-label" for="flexCheckDefault">
                                Gasoline
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Diesel' onChange={handleCategoryChange}  />
                            <label className="form-check-label" for="flexCheckChecked">
                                Diesel
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Lpg' onChange={handleCategoryChange} />
                            <label className="form-check-label" for="flexCheckChecked">
                                Lpg
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Classification</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Economic' onChange={handleCategoryChange}  />
                            <label className="form-check-label" for="flexCheckDefault">
                                Economic
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Standart' onChange={handleCategoryChange} />
                            <label className="form-check-label" for="flexCheckChecked">
                                Standart
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Premium' onChange={handleCategoryChange}  />
                            <label className="form-check-label" for="flexCheckChecked">
                                Premium
                            </label>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default Category


