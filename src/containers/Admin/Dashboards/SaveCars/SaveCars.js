
import axios from 'axios';
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarModals, getALLClassification, getALLFuelType, getAllOfficies, getALLTransmissionType } from '../../../../services/store/car';


function SaveCars() {
    const dispatch = useDispatch();

    // var saveCars = Post("https://localhost:44352/api/Car/SaveCar", initialValues)

    const officies = useSelector(state => state.car.allOfficies);
    const carmodals = useSelector(state => state.car.allCarModals);
    const transmissiontype = useSelector(state => state.car.allTransmissionTypes);
    const fueltype = useSelector(state => state.car.allFuelTypes);
    const classification = useSelector(state => state.car.allClassifications);

    useEffect(() => {
        dispatch(getAllOfficies())
        dispatch(getAllCarModals())
        dispatch(getALLTransmissionType())
        dispatch(getALLFuelType())
        dispatch(getALLClassification())


    }, [dispatch]);

    return (
        <div className='row '>
            <h1 className='d-flex justify-content-center'>Save Cars</h1>
            <div className='d-flex justify-content-center'>

                <div className="col-9">
                    <Formik
                        initialValues={{
                            officiesID: '',
                            carModalID: '',
                            price: '',
                            fuelTypeID: '',
                            transmissionID: '',
                            classificationID: '',
                        }}
                        onSubmit={(values,{resetForm},initialValues ) => {
                            axios.post("https://localhost:44352/api/Car/SaveCar",
                                {
                                    // headers: { 'Content-type': 'application/json' },
                                    officiesID: values.officiesID,
                                    carModalID: values.carModalID,
                                    price: values.price,
                                    fuelTypeID: values.fuelTypeID,
                                    transmissionID: values.transmissionID,
                                    classificationID: values.classificationID,

                                }

                            ).then((response) => 
                            {console.log(values)
                           
                            })
                          
                            resetForm({ values: initialValues });
                         
                        }}
                        
                    >

                        {({ values, handleChange  }) => (
                            <Form  >
                                <input asp-for="ID" hidden />
                                <div className="mb-3">
                                    <label className="form-label">Select Officies</label>
                                    <select className="form-select" name="officiesID"  onChange={handleChange}>
                                        <option selected> Select Officies </option>
                                        {officies.map((officiesItem, index) => {
                                            return <option
                                                key={index}  value={officiesItem.id}  >
                                                {officiesItem.name},{officiesItem.city}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select CarModel</label>
                                    <select className="form-select"  name="carModalID" onChange={handleChange}>
                                        <option selected> Select CarModel </option>
                                        {carmodals.map((carmodalsItem, index) => {
                                            return <option
                                                key={index} value={carmodalsItem.id}  >
                                                {carmodalsItem.name}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Daily Price</label>
                                    <input name='price' type="text" className="form-control" value={values.price} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fuel Type</label>
                                    <select className="form-select" name="fuelTypeID" onChange={handleChange}>
                                        <option selected> Select Fuel Type </option>
                                        {fueltype.map((fueltypeItem, index) => {
                                            return <option
                                                key={index} value={fueltypeItem.id}  >
                                                {fueltypeItem.type}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Transmission Type</label>
                                    <select className="form-select" name="transmissionID" onChange={handleChange}>
                                        <option selected> Select Transmission Type </option>
                                        {transmissiontype.map((transmissionItem, index) => {
                                            return <option
                                                key={index} value={transmissionItem.id}  >
                                                {transmissionItem.type}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Classification Type</label>
                                    <select className="form-select" name="classificationID" onChange={handleChange}>
                                        <option selected> Select Classification Type </option>
                                        {classification.map((classificationItem, index) => {
                                            return <option
                                                key={index} value={classificationItem.id}  >
                                                {classificationItem.type}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" >Save</button>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>

    )
}

export default SaveCars