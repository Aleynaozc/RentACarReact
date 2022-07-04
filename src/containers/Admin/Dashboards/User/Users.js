
import { getAllUsers } from '../../../../services/store/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import "../User/style.css"
import axios from 'axios';
import { Form, Formik, Field } from 'formik'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Users() {
  const updateModalShow = () => setUpdateShow(true);
  const updateModalClose = () => setUpdateShow(false);
  const [updateModalshow, setUpdateShow] = useState(false);
  const [getUpdateUser, setgetUpdateUser] = useState("");


  const deleteUser = async (id) => {
    axios.delete("https://localhost:44352/api/Admin/DeleteUser?id=" + id)
      .then((response) => {
        console.log(response.data)

        dispatch(getAllUsers())
      })
  };

  const UpdateUser = async (id) => {
    await axios.get("https://localhost:44352/api/Admin/UpdateUser?id=" + id)
      .then((response) => {
        setgetUpdateUser(response.data)

        dispatch(getAllUsers())
      })
  };

  // const UpdatedUser = async (id,values) => {
  //   axios.post("https://localhost:44352/api/Admin/UpdatedUser?id=" + id,
  //   {
  //     fullName:values.fullName,
  //     email:values.email,
  //   })
  //     .then((response) => {
  //      console.log(response.data)

  //       dispatch(getAllUsers())
  //     })
  // };
  // const handleChange= (event)=>{

  //     setUpdateUsers(event.target.value);


  // }

  const dispatch = useDispatch();
  const users = useSelector(state => state.dashboard.allUsers);


  useEffect(() => {

    dispatch(getAllUsers())

  }, [dispatch]);

  const [query, setQuery] = useState("")

  const searchUser = (data) => {
    return data.filter(item => item.fullName.toLowerCase().includes(query) || item.email.toLowerCase().includes(query));
  }

  const data = searchUser(users);
  const numAscendingUser = [...data].sort((a, b) => b.id - a.id);
  return (

    <div className="">
      <div className="search_box">
        <form name="search">
          <input
            type="text"
            className="search__button"
            name="txt"
            autoComplete='off'
            onChange={(e) => setQuery(e.target.value)}

          />
          <i className="fas fa-search"></i>
        </form>
      </div>
      <h1 className='dashboard_users_main_title'>USERS</h1>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-3">User Id</div>
          <div className="col col-4">Customer Name</div>
          <div className="col col-4">E-Mail</div>
          <div className="col col-4">Settings</div>

        </li>
        {numAscendingUser.map((userItem, index) => {
          return <li className="table-row" key={index}>
            <div className="col-3" data-label="User Id">{userItem.id}</div>
            <div className="col-4" data-label="Customer Name">{userItem.fullName}</div>
            <div className="col-4" data-label="email">{userItem.email}</div>
            <div className='dahboard_user_page_icon col-1'>
              <button
                className="fa-solid fa-pen-to-square"
                type="button"

                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
               onClick={()=>{updateModalShow(); UpdateUser(userItem.id)}}
              ></button>

              <i className="fa-solid fa-trash" onClick={() => deleteUser(userItem.id)}></i>
            </div>
          </li>

        })}
      </ul>
      <Modal show={updateModalshow} onHide={updateModalClose} onExited={() => { setgetUpdateUser("") }} >
        <Modal.Header >
          <Modal.Title>Update Cars</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getUpdateUser && <Formik
            initialValues={getUpdateUser}
            onSubmit={(values,{resetForm}) => {
              axios.post("https://localhost:44352/api/Admin/UpdatedUser?id=" + `${getUpdateUser.id}`,
                values)

                .then((response) => {
                  console.log(response.data)
                  console.log(getUpdateUser.fullName)
                  console.log(values.fullName)
                  dispatch(getAllUsers())
                  resetForm();
                })
         

            }}

          >

            {({ handleChange }) => (
              <Form >
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name='fullName'
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">Full Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name='email'
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                </div>
                <Modal.Footer>
                  <Button variant="secondary" style={{ backgroundColor: "#00B1E1" }} onClick={() => {
                    updateModalClose();
                    setgetUpdateUser("")
                  }}>
                    Close
                  </Button>
                  <button type="submit" onClick={() => { updateModalClose() }} className="btn btn-primary" >Save</button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>}
        </Modal.Body>

      </Modal>

    </div>

  )
}

export default Users