import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-pro-sidebar/dist/css/styles.css';

import AddWheel from "./components/wheels/add-wheel.component";
import WheelList from "./components/wheels/wheels-list.component";
import EditWheel from "./components/wheels/editWheel.component";
import DeleteWheel from "./components/wheels/deleteWheel.component";

import AddManufacturer from "./components/manufacturers/add-manufacturer.component";
import ManufacturerList from "./components/manufacturers/manufacturers-list.component";
import EditManufacturer from "./components/manufacturers/editManufacturer.component";
import DeleteManufacturer from "./components/manufacturers/deleteManufacturer.component";

import AddEngine from "./components/engines/add-engine.component";
import EngineList from "./components/engines/engines-list.component";
import EditEngine from "./components/engines/editEngine.component";
import DeleteEngine from "./components/engines/deleteEngine.component";

import AddEmployee from "./components/employees/add-empoloyee.component";
import EmployeeList from "./components/employees/employees-list.component";
import EditEmployee from "./components/employees/editEmpoloyee.component";
import DeleteEmployee from "./components/employees/deleteEmpoloyee.component";

import AddOrderType from "./components/order_types/add-order_type.component";
import OrderTypeList from "./components/order_types/order_types-list.component";
import EditOrderType from "./components/order_types/editOrder_type.component";
import DeleteOrderType from "./components/order_types/deleteOrder-type.component";

import AddVehicleModel from "./components/vehicle_models/add-vehicle_model.component";
import VehicleModelList from "./components/vehicle_models/vehicle_models-list.component";
import EditVehicleModel from "./components/vehicle_models/editVehicle_model.component";
import DeleteVehicleModel from "./components/vehicle_models/deleteVehicle_model.component";

import AddOrder from "./components/orders/add-order.component";
import OrdersList from "./components/orders/orders-list.component";
import EditOrder from "./components/orders/editOrder.component";
import DeleteOrder from "./components/orders/deleteOrder.component";

import AddPaymentType from "./components/payment_types/add-payment_type.component";
import PaymentTypeList from "./components/payment_types/payment_types-list.component";
import EditPaymentType from "./components/payment_types/editPayment_type.component";
import DeletePaymentType from "./components/payment_types/deletePayment-type.component";

import AddQualification from "./components/qualifications/add-qualification.component";
import QualificationsList from "./components/qualifications/qualifications-list.component";
import EditQualification from "./components/qualifications/editQualification.component";
import DeleteQualification from "./components/qualifications/deleteQualification.component";

import AddTransmission from "./components/transmissions/add-transmission.component";
import TransmissionsList from "./components/transmissions/transmissions-list.component";
import EditTransmission from "./components/transmissions/editTransmission.component";
import DeleteTransmission from "./components/transmissions/deleteTransmission.component";

import TurboList from "./components/turbos/turbos-list.component";
import AddTurbo from "./components/turbos/add-turbo.component";
import EditTurbo from "./components/turbos/editTurbo.component";
import DeleteTurbo from "./components/turbos/deleteTurbo.component";

import VehicleTypeList from "./components/vehicle_types/vehicle_types-list.component";
import AddVehicleType from "./components/vehicle_types/add-vehicle_type.component";
import EditVehicleType from "./components/vehicle_types/editVehicle_type.component";
import DeleteVehicleType from "./components/vehicle_types/deleteVehicle_type.component";

import UsersList from "./components/userrrs/users-list.component";
import EditUser from "./components/userrrs/editUser.component";
import DeleteUser from "./components/userrrs/deleteUser.component";

const AdminPanel = () => {
  return(
    <div>
          <div className="sidenav">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem>
                  <Link to={"/adminpanel"} className="navbar-brand ">
                    Vitallek Autoshop
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/manufacturers"} className="nav-link">
                    Manufacturers List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/vehicle_models"} className="nav-link">
                    Vehicles List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/engines"} className="nav-link">
                    Engines List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/turbos"} className="nav-link">
                    Turbos List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/transmissions"} className="nav-link">
                    Transmissions List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/wheels"} className="nav-link">
                    Wheels List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/vehicle_types"} className="nav-link">
                    Vehicle Types List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/users"} className="nav-link">
                    Users List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/employees"} className="nav-link">
                    Employees List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/qualifications"} className="nav-link">
                    Qualifications List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/orders"} className="nav-link">
                    Orders List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/order_types"} className="nav-link">
                    Order type List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/adminpanel/payment_types"} className="nav-link">
                    Payment type List
                  </Link>
                </MenuItem>

              </Menu>
            </ProSidebar>
          </div>

          <div className="mainContainer">
            <Switch>
              <Route exact path={["/adminpanel/wheels"]} component={WheelList} />
              <Route path="/add/wheels" component={AddWheel} />
              <Route path="/edit/wheels" component={EditWheel} />
              <Route path="/delete/wheels" component={DeleteWheel} />

              <Route exact path={["/adminpanel/manufacturers"]} component={ManufacturerList} />
              <Route path="/add/manufacturers" component={AddManufacturer} />
              <Route path="/edit/manufacturers" component={EditManufacturer} />
              <Route path="/delete/manufacturers" component={DeleteManufacturer} />

              <Route exact path={["/adminpanel/engines"]} component={EngineList} />
              <Route path="/add/engines" component={AddEngine} />
              <Route path="/edit/engines" component={EditEngine} />
              <Route path="/delete/engines" component={DeleteEngine} />

              <Route exact path={["/adminpanel/employees"]} component={EmployeeList} />
              <Route path="/add/employees" component={AddEmployee} />
              <Route path="/edit/employees" component={EditEmployee} />
              <Route path="/delete/employees" component={DeleteEmployee} />

              <Route exact path={["/adminpanel/order_types"]} component={OrderTypeList} />
              <Route path="/add/order_types" component={AddOrderType} />
              <Route path="/edit/order_types" component={EditOrderType} />
              <Route path="/delete/order_types" component={DeleteOrderType} />

              <Route exact path={["/adminpanel/vehicle_models"]} component={VehicleModelList} />
              <Route path="/add/vehicle_models" component={AddVehicleModel} />
              <Route path="/edit/vehicle_models" component={EditVehicleModel} />
              <Route path="/delete/vehicle_models" component={DeleteVehicleModel} />

              <Route exact path={["/adminpanel/orders"]} component={OrdersList} />
              <Route path="/add/orders" component={AddOrder} />
              <Route path="/edit/orders" component={EditOrder} />
              <Route path="/delete/orders" component={DeleteOrder} />

              <Route exact path={["/adminpanel/payment_types"]} component={PaymentTypeList} />
              <Route path="/add/payment_types" component={AddPaymentType} />
              <Route path="/edit/payment_types" component={EditPaymentType} />
              <Route path="/delete/payment_types" component={DeletePaymentType} />

              <Route exact path={["/adminpanel/qualifications"]} component={QualificationsList} />
              <Route path="/add/qualifications" component={AddQualification} />
              <Route path="/edit/qualifications" component={EditQualification} />
              <Route path="/delete/qualifications" component={DeleteQualification} />

              <Route exact path={["/adminpanel/transmissions"]} component={TransmissionsList} />
              <Route path="/add/transmissions" component={AddTransmission} />
              <Route path="/edit/transmissions" component={EditTransmission} />
              <Route path="/delete/transmissions" component={DeleteTransmission} />

              <Route exact path={["/adminpanel/turbos"]} component={TurboList} />
              <Route path="/add/turbos" component={AddTurbo} />
              <Route path="/edit/turbos" component={EditTurbo} />
              <Route path="/delete/turbos" component={DeleteTurbo} />

              <Route exact path={["/adminpanel/vehicle_types"]} component={VehicleTypeList} />
              <Route path="/add/vehicle_types" component={AddVehicleType} />
              <Route path="/edit/vehicle_types" component={EditVehicleType} />
              <Route path="/delete/vehicle_types" component={DeleteVehicleType} />

              <Route exact path={["/adminpanel/users"]} component={UsersList} />
              <Route path="/edit/users" component={EditUser} />
              <Route path="/delete/users" component={DeleteUser} />

            </Switch>
          </div>
        </div>
  )
}
const Login = () => {
  return(
    <div className="loginformwrapper">
      <button className="btn btn-primary">Log in</button>
    </div>
  )
}
function App() {
  return (
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

const Routes = () => {
  return(
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/adminpanel" component={AdminPanel}/>
    </Switch>
  )
}

export default App;
