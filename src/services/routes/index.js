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
                    <Route exact path="carslist" element={
                    < RequireAdminAuth>
                          <AllCar />
                    </RequireAdminAuth>
                    } />
                    <Route path="/sign-in-up" element={ role !== UserRole.ADMIN ? <SignInUp /> : <Navigate to="dashboard" />} />
                    <Route path="reservation/paypage/:cardID/:date" element={!token ?
                        <RequireUserAuth>
                            <Paypage />
                        </RequireUserAuth>
                        : <Navigate to="paypage" />} />

                    <Route path="carlist" element={
                        <RequireUserAuth 
                        element={<Paypage />}>

                        </RequireUserAuth>
                    } />
                </Route>
                <Route path="/admin"

                    element={role !== UserRole.ADMIN ? <AdminLogin /> : <Navigate to="/" />}
                />
                  <Route path="dashboard" element={
                    
                    <DashboardLayout />
               
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