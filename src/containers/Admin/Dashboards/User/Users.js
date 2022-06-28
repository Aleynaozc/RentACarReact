
import { getAllUsers } from '../../../../services/store/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import "../User/style.css"
import axios from 'axios';
import { Form, Formik, Field } from 'formik'

function Users() {

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







  const [query, setQuery] = useState("")

  const dispatch = useDispatch();
  const users = useSelector(state => state.dashboard.allUsers);


  useEffect(() => {

    dispatch(getAllUsers())

  }, [dispatch]);

  // const search = (data) => {
  //   return data.filter((item) => item.fullName.toLowerCase().includes(query));
  // };

  return (

    <div className="">
      <div className="search_box">
        <form name="search">
          <input
            type="text"
            className="search__button"
            name="txt"
            autoComplete='off'
            onChange={e => setQuery(e.target.value)}

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
        {users.map((userItem, index) => {
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
                onClick={() => { UpdateUser(userItem.id) }}
              ></button>

              <i className="fa-solid fa-trash" onClick={() => deleteUser(userItem.id)}></i>
            </div>
          </li>

        })}
      </ul>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                setgetUpdateUser("")
              }}></button>
            </div>
            {getUpdateUser && <Formik
              initialValues={getUpdateUser}
              onSubmit={(values) => {
                axios.post("https://localhost:44352/api/Admin/UpdatedUser?id=" + `${getUpdateUser.id}`,
                  values)

                  .then((response) => {
                    console.log(response.data)
                    console.log(getUpdateUser.fullName)
                    console.log(values.fullName)
                    dispatch(getAllUsers())
                  })


              }}

            >

              {({ values, handleChange, initialValues }) => (
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
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" >Save changes</button>
                  </div>

                </Form>
              )}
            </Formik>}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Users