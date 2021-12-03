import React, { element } from "react";
import axios from 'axios';
import {
  Outlet,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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

  return(
    <div>
      <div className="sidenav">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>
              <Link to={"/admin"} className="navbar-brand ">
                Vitallek Autoshop
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/manufacturers"} className="nav-link">
                Manufacturers List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/vehicle_models"} className="nav-link">
                Vehicles List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/engines"} className="nav-link">
                Engines List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/turbos"} className="nav-link">
                Turbos List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/transmissions"} className="nav-link">
                Transmissions List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/wheels"} className="nav-link">
                Wheels List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/vehicle_types"} className="nav-link">
                Vehicle Types List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/users"} className="nav-link">
                Users List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/employees"} className="nav-link">
                Employees List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/qualifications"} className="nav-link">
                Qualifications List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/orders"} className="nav-link">
                Orders List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/order_types"} className="nav-link">
                Order type List
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/admin/payment_types"} className="nav-link">
                Payment type List
              </Link>
            </MenuItem>

          </Menu>
        </ProSidebar>
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
