import {
    BrowserRouter as Router,
  
    Navigate,
  
    Route,
    Routes
} from "react-router-dom";
import React from 'react'
import Home from "../../containers/Home/Home";
import NotFound from "../../containers/NotFound";
import Layout from "../../containers/Layout";
import Reservation from "../../containers/Reservation/CarList";
import AllCar from "../../containers/AllCars/AllCars";
import DashboardLayout from "../../containers/Dashboards/DashboardLayout";
import Users from "../../containers/Dashboards/User/Users";
import Admin from "../../containers/Dashboards/Admin/Admin";
import SaveCars from "../../containers/Dashboards/SaveCars/SaveCars";
import SignInUp from "../../containers/SignInUp/SignInUp";
import Paypage from "../../containers/PayPage/Paypage";
import RequireAdminAuth from "./requireAdminAuth";
import RequireUserAuth from "./requireUserAuth";
import { useSelector } from "react-redux";





const PageRoutes = () => {

    const { token } = useSelector((state) => state.auth);
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>

                    <Route exact path="/" element={<Home />} />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="carslist" element={<AllCar />} />
                    <Route path="/sign-in-up" element={!token ? <SignInUp /> : <Navigate to="/" />} />

                    <Route path="reservation/paypage/:cardID/:date" element={
                        <RequireAdminAuth>
                            <DashboardLayout/>
                        </RequireAdminAuth>
                    } />
                    <Route path="carlist" element={
                        <RequireUserAuth>
                    <Paypage />
                    </RequireUserAuth>
                    } />
                </Route>

                <Route element={
                    <RequireAdminAuth>
                        <DashboardLayout />
                    </RequireAdminAuth>
                }>
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/savecars" element={<SaveCars />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    )
}

export default PageRoutes;