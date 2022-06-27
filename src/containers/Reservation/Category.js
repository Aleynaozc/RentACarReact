

import React from 'react'

function Category({ setSelectedCategory, selectedCategory,opencategory }) {

    const setCategroyFilters = (value, type) => {
        const findedItemIndex = selectedCategory[type].findIndex(x => x == value);
        if (findedItemIndex == -1)
            setSelectedCategory({ ...selectedCategory, [type]: [...selectedCategory[type], value] });
        else {

            selectedCategory[type].splice(findedItemIndex, 1)
            setSelectedCategory({
                ...selectedCategory,
                [type]: [...selectedCategory[type]]
            });
        }
    }

    function handleCategoryChange(event, type) {
        setCategroyFilters(event.target.value, type)
    }


    return (
         <>
        <div className='col-lg-3 filter__container ' >
            <h3 className=''>Choose a Vehicle Class</h3>
            <div className='filter__categories'>
                <h4 className='filter__title'>FILTERS</h4>
                <div className='categories'>
                    <div className='categories__item'>
                        <h5>Transmission Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Automatic' onChange={(e) => { handleCategoryChange(e, "transmissionType") }} />
                            <span className="form-check-label" htmlFor="flexCheckDefault"  >
                                Automatic
                            </span>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Manual' onChange={(e) => { handleCategoryChange(e, "transmissionType") }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Manual
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Fuel Type</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Gasoline' onChange={(e) => { handleCategoryChange(e, "fuelType") }} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Gasoline
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Diesel' onChange={(e) => { handleCategoryChange(e, "fuelType") }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Diesel
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Lpg' onChange={(e) => { handleCategoryChange(e, "fuelType") }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Lpg
                            </label>
                        </div>
                    </div>
                    <div className='categories__item'>
                        <h5>Classification</h5>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Economic' onChange={(e) => { handleCategoryChange(e, "classification") }} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Economic
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Standart' onChange={(e) => { handleCategoryChange(e, "classification") }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Standart
                            </label>
                        </div>
                        <div className="item__form-check">
                            <input type="checkbox" className='custom' value='Premium' onChange={(e) => { handleCategoryChange(e, "classification") }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Premium
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category


