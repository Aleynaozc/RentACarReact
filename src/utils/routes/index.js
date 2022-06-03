import {
    BrowserRouter as Router,
    Route,
    Routes
   } from "react-router-dom";
   import React from 'react'
   import Home from "../../containers/Home/Home";
   import NotFound from "../../containers/NotFound";
   import Layout from "../../containers/Layout";
   import Reservation from "../../containers/Reservation/CarList";
   import AllCar from "../../containers/AllCars/AllCars";

   const PageRoutes = () => {
    return (
     <Router>
      <Routes>
      <Route element={<Layout/>}>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="reservation" element={<Reservation/>} />
      <Route exact path="carList" element={<AllCar/>} />
      </Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
     </Router>
    )
   }
   
   export default PageRoutes;