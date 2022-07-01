
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../assets/styles/components/allCars/style.css"
import { getAllCars } from '../../services/store/car';



const AllCars = () => {
   
   
    // const [allCarList, setAllCarList] = useState([]);
        // const getCars = async () => {
    //     axios.get("https://localhost:44352/api/RentaCar/Listcar")
    //         .then((res) => setAllCarList(res.data))
    // };
const dispatch=useDispatch();
    const cars = useSelector(state => state.car.allCars);

  
    useEffect(() => {
        
        dispatch(getAllCars())
       }, [dispatch]);

    return (

        <div className="row p-0 m-0">
            <div className="col-lg-4 col-md-5 all_car__list">
                {
                      cars.map((carItem) => {
                            
                            return    <div className="all_car-card " >
                            <p className="car__classification">{carItem.classification.type}</p>
                            <p className="car_name">{carItem.carModal.brand.name} {carItem.carModal.name} </p>
                            <div className='car_slider__container'>
                                <div className="car__slider">
                                    <img className="car__card-img-top" src={carItem.carModal.imgURL} alt="Card image cap" />
                                </div>
                            </div>
                             <div className="allcar__card-body">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="mt-2 allCar_card__features ">
                                        <p className='features'>  <i className="fa-solid fa-gas-pump icons "></i>{carItem.fuelType.type}</p>
                                        <p className='features'><img className=" transmission__image" src={'../images/transmission.png'} alt="transmission"/> {carItem.transmissionType.type}</p>
                                        <p className='features'><i class="fa-solid fa-users"></i> {carItem.carModal.seats} Seats </p>
                                        <p className='features'><i className="fa-solid fa-credit-card icons"></i>Credit Card</p>
                                    </div>
      
                                    <div className="show__detail_button-area">
                                    <div className="car__price">
                                        <span className="allCar_daily__price"> {carItem.price} TL / Daily</span>
                                    </div>
                                    <Link to={`/detail/${carItem.id}`}>
                                     <button className="show__detail_button" value={carItem.id}> Show Detail </button>
                                     </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
            </div>

        </div>




    )
}

export default AllCars