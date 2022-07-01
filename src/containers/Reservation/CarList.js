
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../../assets/styles/components/reservation/style.css"
import Category from './Category';
import moment from 'moment';


function cars() {
    const [opencategory,setopencategory]=useState(false)
 
 

    const dates = new URLSearchParams(window.location.search)
    var startDate = dates.get("startDate");
    var endDate = dates.get("endDate");
    var location = dates.get("location");
     
    const start=moment(startDate).format('YYYY-MM-DD')
   const end=moment(endDate).format('YYYY-MM-DD')
    const newEndDate = new Date(endDate);  
    const newStartDate = new Date(startDate);
   

const params = useParams();
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = newEndDate - newStartDate

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    const [carList, setCarList] = useState([]);
    
    const officiescars = `https://localhost:44352/api/RentaCar/reservation?location=${location}&dts=${start}&dte=${end}` ;
    const getCars = async () => {
      await  axios.get(officiescars)
            .then((res) => setCarList(res.data))
    };

    useEffect(() => {
        getCars();
       
    
    }, []);

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
                    || user.classification.type.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.carModal.brand.name.toLowerCase().startsWith(keyword.toLowerCase());

            });
            setCarList(results);
        } else {
            getCars();

        }

        setFilterSearch(keyword);
    };


    return (
        <div>
            <div className="search_box">
                <form name="search" autoComplete='off'>
                    <input
                        type="text"
                        className="search__button"
                        name="txt"
                        value={filterSearch}
                        onChange={filter}
                        />
                    <i className="fas fa-search"></i>
                </form>
            </div>
            <div className=' filter__area'  onClick={()=>setopencategory(true)} 
            style=
                {{
                    display : opencategory ? "none":"flex" 
                    
                 } }>
                <div className='filter__area_title'>
                Filter
                </div>
                
         </div>
         <div className=' filter__area2'  onClick={()=>setopencategory(false)} style=
                {{
                    display : opencategory ? "flex":"none" 
                    
                    
                 } }>
                <div className='filter__area_title'>
                Filter
                </div>
                </div>
            <div className='row m-0 ds' >
                { opencategory && <Category selectedCategory={selectedCategory} opencategory={opencategory} setSelectedCategory={setSelectedCategory} /> }
              
                <div className="  col-lg-8 col-md-8 car__card" 
                style=
                {{
                    left : opencategory ? "80px":"180px" ,
                    columnGap : opencategory ? "120px":"180px"
                 } }>
                    
                    {filteredList.map((carItem) => {
                        return <>
                            <div className="carlist__cards " key={carItem.id}>
                                <p id={carItem.id} hidden></p>
                                <p className="car__classification">{carItem.classification.type}</p>
                                <div className='row mb-3'>
                                    <div className="card__features-body">
                                        <p className="car_name">{carItem.carModal.brand.name} {carItem.carModal.name} </p>
                                        <div className='row car__features_cont'>
                                            <div className='slider__container  '>
                                                <div className="">
                                                    <img className="card-img-top__carlist" src={carItem.carModal.imgURL} alt="Card image cap" />
                                                </div>
                                            </div>
                                            <div className=" car__price">
                                                <div className=" col-lg-4 card__features ">
                                                    <p className='features'><i className="fa-solid fa-gas-pump icons "></i>{carItem.fuelType.type}</p>
                                                    <p className='features'><img className="mt-1 transmission__image" src={process.env.PUBLIC_URL + '/images/transmission.png'} alt="transmission"/>{carItem.transmissionType.type} </p>
                                                    <p className='features'><i class="fa-solid fa-users"></i> {carItem.carModal.seats} Seats </p>
                                                    <p className='features'> <i className="fa-solid fa-credit-card icons"></i>Credit Card</p>
                                                </div>
                                                <div className='dm col-lg-7'>
                                                    <span className=" total__price">{diffInDays <= 0 ? carItem.price : carItem.price * diffInDays} TL </span>
                                                    <span className="daily__price">{carItem.price} / Daily</span>
                                                </div>
                                            </div>
                                            <div className="pay__button-area">
                                                <Link to={`paypage/${carItem.id}/${diffInDays <= 0 ? 1 : diffInDays}/${start}/${end}`}>
                                                    <button value={carItem.id} type="submit" className="pay__button">Book Now</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>

            </div>

        </div>


    )
}


export default cars;