
import { getAllUsers } from '../../../../services/store/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import "../User/style.css"

function Users() {
  
const [query, setQuery]=useState("")

  const dispatch = useDispatch();
  const users = useSelector(state => state.dashboard.allUsers);


  useEffect(() => {

    dispatch(getAllUsers())
  }, [dispatch]);

 const search=(data)=>{
  return data.filter((item)=>item.fullName.toLowerCase().includes(query));
 };

  return (

    <div className="">
      <div class="search_box">
        <form name="search">
          <input
            type="text"
            className="search__button"
            name="txt"
            autoComplete='off'
            onChange={e=>setQuery(e.target.value)}
           
          />
          <i class="fas fa-search"></i>
        </form>
      </div>
      <h1 className='dashboard_users_main_title'>USERS</h1>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-3">Job Id</div>
          <div className="col col-4">Customer Name</div>
          <div className="col col-4">E-Mail</div>
          <div className="col col-4">Settings</div>

        </li>
        {users.map((carItem) => {
          return <>
            <li className="table-row">
              <div className="col-3" data-label="User Id">{carItem.id}</div>
              <div className="col-4" data-label="Customer Name">{carItem.fullName}</div>
              <div className="col-4" data-label="email">{carItem.email}</div>
              <div className='dahboard_user_page_icon col-1'>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </li>
          </>
        })}
      </ul>

    </div>
  )
}

export default Users