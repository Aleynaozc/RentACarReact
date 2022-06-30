
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarModals, getAllCars, getALLClassification, getALLFuelType, getAllOfficies, getALLTransmissionType } from '../../../../services/store/car';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function SaveCars() {
    const [show, setShow] = useState(false);
    const [updateModalshow, setUpdateShow] = useState(false);
    const [getUpdateCar, setgetUpdateCar] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateModalShow = () => setUpdateShow(true);
    const updateModalClose = () => setUpdateShow(false);

    const dispatch = useDispatch();

    // var saveCars = Post("https://localhost:44352/api/Car/SaveCar", initialValues)

    const officies = useSelector(state => state.car.allOfficies);
    const carmodals = useSelector(state => state.car.allCarModals);
    const transmissiontype = useSelector(state => state.car.allTransmissionTypes);
    const fueltype = useSelector(state => state.car.allFuelTypes);
    const classification = useSelector(state => state.car.allClassifications);
    const cars = useSelector(state => state.car.allCars);
    
    const numAscending = [...cars].sort((a, b) => b.id - a.id);

    const deleteCar = async (id) => {
        axios.delete("https://localhost:44352/api/Car/DeleteCar?id=" + id)
            .then((response) => {
                console.log(response.data)

                dispatch(getAllCars())
            })
    };

    const UpdateCar = async (id) => {
        await axios.get("https://localhost:44352/api/Car/UpdateCar?id=" + id)
            .then((response) => {
                setgetUpdateCar(response.data)

                dispatch(getAllCars())
            })
    };




    useEffect(() => {
        dispatch(getAllOfficies())
        dispatch(getAllCarModals())
        dispatch(getALLTransmissionType())
        dispatch(getALLFuelType())
        dispatch(getALLClassification())
        dispatch(getAllCars())
    }, [dispatch]);

    return (
        <div className='row'>
            <h1 style={{ color: "#95A5A6", fontWeight: "bold" }}>Car List & Save Car</h1>

            <div className='row'>
                <ul className=" col-10 responsive-table">
                    <li className="table-header" style={{ color: "black", fontWeight: "bold" }}>

                        <div className="col col-3">Car Id</div>
                        <div className="col col-3">Car Image</div>
                        <div className="col col-3">Brand & Modal Name</div>
                        <div className="col col-2">Daily Price</div>
                        <div className="col col-2">Settings</div>
                    </li>
                    {numAscending.map((carItem, index) => {
                        return <li className="table-row" key={index}>
                            <div className="col-2" data-label="User Id">{carItem.id}</div>
                            <div className="col-4">
                                <img src={carItem.carModal.imgURL} alt="Car image" style={{ width: "220px" }}  />
                            </div>
                            <div className="col-3" data-label="Car Modal Name">
                                <div style={{ display: "block", color: "brown" }}>
                                    <p>{carItem.carModal.brand.name} {carItem.carModal.name}</p>
                                    <p>{carItem.fuelType.type} </p>
                                    <p>{carItem.transmissionType.type} </p>
                                    <p>{carItem.classification.type} </p>
                                </div>
                            </div>
                            <div className="col-2" data-label="price">{carItem.price}</div>
                            <div className=' col-1 '>
                                <div className='dahboard_user_page_icon'>
                                    <button
                                        className=" fa-solid fa-pen-to-square"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => { updateModalShow(); UpdateCar(carItem.id) }}
                                    ></button>
                                    <i className="fa-solid fa-trash " onClick={() => deleteCar(carItem.id)}></i>
                                </div>

                            </div>
                        </li>

                    })}

                </ul>
                <div className='col-lg-2 mt-3 d-flex justify-content-center     '>
                    <div>
                        <Button color="secondary" style={{ backgroundColor: "#00B1E1" }} onClick={handleShow}>
                            Save Cars
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Save Cars</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
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
                                            onSubmit={(values, { resetForm }, initialValues) => {
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

                                                ).then((response) => {
                                                    console.log(values)

                                                })

                                                resetForm({ values: initialValues });

                                            }}
                                        >
                                            {({ values, handleChange }) => (
                                                <Form  >
                                                    <input asp-for="ID" hidden />
                                                    <div className="mb-3">
                                                        <label className="form-label">Select Officies</label>
                                                        <select className="form-select" name="officiesID" onChange={handleChange} defaultValue=" ">
                                                            <option value=" " selected> Select Officies </option>
                                                            {officies.map((officiesItem, index) => {
                                                                return <option
                                                                    key={index} value={officiesItem.id}  >
                                                                    {officiesItem.name},{officiesItem.city}
                                                                </option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Select CarModel</label>
                                                        <select className="form-select" name="carModalID" onChange={handleChange} defaultValue=" ">
                                                            <option selected value=" "> Select CarModel </option>
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
                                                        <select className="form-select" name="fuelTypeID" onChange={handleChange} defaultValue=" ">
                                                            <option selected value=" " > Select Fuel Type </option>
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
                                                        <select className="form-select" name="transmissionID" onChange={handleChange} defaultValue=" ">
                                                            <option selected  value=" "> Select Transmission Type </option>
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
                                                        <select className="form-select" name="classificationID" onChange={handleChange} defaultValue=" ">
                                                            <option selected  value=" "> Select Classification Type </option>
                                                            {classification.map((classificationItem, index) => {
                                                                return <option
                                                                    key={index} value={classificationItem.id}  >
                                                                    {classificationItem.type}
                                                                </option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <button type="submit" style={{ backgroundColor: "#00B1E1" }} onClick={handleClose} className="btn btn-primary" >Save</button>
                                                    </Modal.Footer>

                                                </Form>
                                            )}
                                        </Formik>

                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </div>
                </div>
            </div>
            <Modal show={updateModalshow} onHide={updateModalClose} onExited={() => { setgetUpdateCar("") }} >
                <Modal.Header >
                    <Modal.Title>Update Cars</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                        <div className="col-9">
                            {getUpdateCar && <Formik
                                initialValues={getUpdateCar}
                                onSubmit={(values, { resetForm }) => {
                                    axios.post("https://localhost:44352/api/Car/UpdatedCar?id=" + `${getUpdateCar.id}`,
                                        values)

                                        .then((response) => {
                                            console.log(response.data)

                                            dispatch(getAllCars())
                                            resetForm();
                                        })

                                }}
                            >
                                {({ handleChange, handleReset }) => (
                                    <Form onReset={handleReset} id="formupdate" >
                                        <div className="" >
                                            <div className="mb-3">
                                                <label className="form-label">Select Officies</label>
                                                <select className="form-select" name="officiesID" onChange={handleChange} defaultValue="">
                                                    <option hidden> {getUpdateCar.officies.name},{getUpdateCar.officies.city}  </option>
                                                    {officies.map((officiesItem, index) => {
                                                        return <option
                                                            key={index} value={officiesItem.id}  >
                                                            {officiesItem.name},{officiesItem.city}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Select Car Modal</label>
                                                <select className="form-select" name="carModalID" onChange={handleChange}>
                                                    <option hidden> {getUpdateCar.carModal.name} </option>
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
                                                <Field


                                                    name='price' type="text"
                                                    className="form-control"

                                                />

                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Fuel Type</label>
                                                <select className="form-select" name="fuelTypeID" onChange={handleChange}>
                                                    <option hidden >{getUpdateCar.fuelType.type} </option>
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
                                                    <option hidden>{getUpdateCar.transmissionType.type}</option>
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
                                                    <option hidden>{getUpdateCar.classification.type}</option>
                                                    {classification.map((classificationItem, index) => {
                                                        return <option
                                                            key={index} value={classificationItem.id}  >
                                                            {classificationItem.type}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <Modal.Footer>
                                            <Button variant="secondary" style={{ backgroundColor: "#00B1E1" }} 
                                            onClick={() => 
                                                {
                                                updateModalClose();

                                                }}>
                                                Close
                                            </Button>
                                            <button type="submit" onClick={() => { updateModalClose() }} className="btn btn-primary" >Save</button>
                                        </Modal.Footer>
                                    </Form>
                                )}
                            </Formik>
                            }
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>


    )
}

export default SaveCars