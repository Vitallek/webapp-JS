import React, { useState, useEffect } from "react";
import {useCookies, Cookies} from 'react-cookie';
import axios from 'axios';
import {
  Outlet,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "./adminStuff/App.css";
import 'react-pro-sidebar/dist/css/styles.css';

import WheelList from "../components/wheels/wheels-list.component";
import ManufacturerList from "../components/manufacturers/manufacturers-list.component";
import EngineList from "../components/engines/engines-list.component";
import EmployeeList from "../components/employees/employees-list.component";
import OrderTypeList from "../components/order_types/order_types-list.component";
import VehicleModelList from "../components/vehicle_models/vehicle_models-list.component";
import OrdersList from "../components/orders/orders-list.component";
import PaymentTypeList from "../components/payment_types/payment_types-list.component";
import QualificationsList from "../components/qualifications/qualifications-list.component";
import TransmissionsList from "../components/transmissions/transmissions-list.component";
import TurboList from "../components/turbos/turbos-list.component";
import VehicleTypeList from "../components/vehicle_types/vehicle_types-list.component";
import UsersList from "../components/userrrs/users-list.component";

export default function AdminPanel(){
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.user[0].role == 'admin') {
        setRole(response.data.user[0].role);
      } else {navigate('/guest')}
    });
  }, []);

  const logout = (e) => {
    e.preventDefault()
    axios.get("http://localhost:5000/logout").then((response) => {
      return response
    });
    navigate('/guest')
  }
  return(
    <div>
      <div className=''>
        <nav className="navbar-expand-lg fixed-top navbar-dark nav-bg">
          <div className='scrollbar scrollbar-primary'>
            <ul className="navbar-nav scroll pl-3 pt-3">
              <li className="nav-item ml-2">
              <Link to={"/admin"} className="navbar-brand">
                Vitallek Carshop
              </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/manufacturers"} className="nav-link">
                  Manufacturers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/vehicle_models"} className="nav-link">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/engines"} className="nav-link">
                  Engines
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/turbos"} className="nav-link">
                  Turbos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/transmissions"} className="nav-link">
                  Transmissions
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/wheels"} className="nav-link">
                  Wheels
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/vehicle_types"} className="nav-link">
                  Vehicle types
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/users"} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/employees"} className="nav-link">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/qualifications"} className="nav-link">
                  Qualifications
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/orders"} className="nav-link">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/order_types"} className="nav-link">
                  Order types
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/admin/payment_types"} className="nav-link ">
                  Payment type List
                </Link>
              </li>

              <li className="nav-item logout">
                <p className="navbar-brand ml-2" onClick={logout}>Log Out</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mainContainer">
        <Outlet/>
      </div>


    <Routes>
      <Route path={`/admin/wheels`} element={<WheelList/>}/>
      <Route path={`/admin/manufacturers`} element={<ManufacturerList/>} />
      <Route path={`/admin/engines`} element={<EngineList/>} />
      <Route path={`/admin/employees`} element={<EmployeeList/>} />
      <Route path={`/admin/order_types`} element={<OrderTypeList/>} />
      <Route path={`/admin/vehicle_models`} element={<VehicleModelList/>} />
      <Route path={`/admin/orders`} element={<OrdersList/>} />
      <Route path={`/admin/payment_types`} element={<PaymentTypeList/>} />
      <Route path={`/admin/qualifications`} element={<QualificationsList/>} />
      <Route path={`/admin/transmissions`} element={<TransmissionsList/>} />
      <Route path={`/admin/turbos`} element={<TurboList/>} />
      <Route path={`/admin/vehicle_types`} element={<VehicleTypeList/>} />
      <Route path={`/admin/users`} element={<UsersList/>} />
    </Routes>
  </div>
  )
}
