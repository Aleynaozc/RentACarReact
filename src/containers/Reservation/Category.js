import React, { useState } from 'react'

function Category() {
  
   
    return (

        <div className='col-lg-4 col-md-4 filter__container'>
            <h3 className=''>Choose a Vehicle Class</h3>
            <div className='filter__categories'>
                <h4 className='filter__title'>FILTERS</h4>
                <div className='categories'>
                    <div className='categories__item'>
                        <h5>Transmission Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <span className="form-check-label" for="flexCheckDefault" >
                                Automatic
                            </span>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckChecked">
                                Manual
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Fuel Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckDefault">
                                Gasoline
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckChecked">
                                Diesel
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckChecked">
                                Lpg
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Classification</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckDefault">
                                Economic
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckChecked">
                                Standart
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' />
                            <label className="form-check-label" for="flexCheckChecked">
                                Premium
                            </label>
                        </div>
                    </div>

                </div>
                <button className='btn btn-primary'>To Filter</button>
            </div>
        </div>
    )
}

export default Category


