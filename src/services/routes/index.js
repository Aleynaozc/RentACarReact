import {
    BrowserRouter as Router,

    Navigate,

    Route,
    Routes,


} from "react-router-dom";
import React from 'react'
import Home from "../../containers/Home/Home";
import NotFound from "../../containers/NotFound";
import Layout from "../../containers/Layout";
import Reservation from "../../containers/Reservation/CarList";
import AllCar from "../../containers/AllCars/AllCars";
import DashboardLayout from "../../containers/Admin/DashboardLayout";
import Users from "../../containers/Admin/Dashboards/User/Users";
import Admin from "../../containers/Admin/Dashboards/AdminPage/Admin";
import SaveCars from "../../containers/Admin/Dashboards/SaveCars/SaveCars";
import SignInUp from "../../containers/SignInUp/SignInUp";
import Paypage from "../../containers/PayPage/Paypage";
import AdminLogin from "../../containers/Admin/AdminLogin";
import { useSelector } from "react-redux";
import { UserRole } from "../utils/enums/auth";
import CarDetailPage from "../../containers/CarDetailsPage/CarDetailPage";





function RequireUserAuth({ children }) {


    const { token } = useSelector((state) => state.auth)
    if (!token) {
        return <Navigate to="/sign-in-up" replace />
    }
    return children;
}

const RequireAdminAuth = ({ children }) => {
    const { role } = useSelector((state) => state.auth)


    if (role != UserRole.ADMIN) {
        return <Navigate to="/admin" replace />
    }
    return children;
}



const PageRoutes = () => {

    const { token } = useSelector((state) => state.auth);
    const { role } = useSelector((state) => state.auth);

    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>

                    <Route exact path="/" element={<Home />} />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="/carslist" element={<AllCar />} />
                    <Route path="/sign-in-up" element={<SignInUp />} />
                    <Route path="detail/:cardID/" element={<CarDetailPage />} />
                    <Route path="reservation/paypage/:cardID/:datedif/:startdatetime/:enddatetime"
                        element={token ? <Paypage /> : <SignInUp />} />
                </Route>

                <Route path="/admin"
                    element={role !== UserRole.ADMIN ? <AdminLogin /> : <Navigate to="/dashboard" />}
                />

                {/* <Route path="/dashboard"
                    element={
                        <RequireAdminAuth>
                            <DashboardLayout />
                        </RequireAdminAuth>
                    }> */}
                           <Route path="/dashboard"
                    element={
                        <RequireAdminAuth>
                            <DashboardLayout />
                            </RequireAdminAuth>
                    }>
                        
                    <Route path="/dashboard/admin/users" element={<Users />} />
                    <Route path="/dashboard/admin" element={<Admin />} />
                    <Route path="/dashboard/admin/savecars" element={<SaveCars />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default PageRoutes;