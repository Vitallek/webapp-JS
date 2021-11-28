import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="sidenav">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem>
                  <Link to={"/"} className="navbar-brand ">
                    Vitallek Autoshop
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/manufacturers"} className="nav-link">
                    Manufacturers List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/vehicle_models"} className="nav-link">
                    Vehicles List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/engines"} className="nav-link">
                    Engines List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/turbos"} className="nav-link">
                    Turbos List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/transmissions"} className="nav-link">
                    Transmissions List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/wheels"} className="nav-link">
                    Wheels List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/vehicleTypes"} className="nav-link">
                    Vehcle Types List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/customers"} className="nav-link">
                    Customers List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/employees"} className="nav-link">
                    Employees List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/qualitions"} className="nav-link">
                    Qualifications List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/orders"} className="nav-link">
                    Orders List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/order_types"} className="nav-link">
                    Order type List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/payment_types"} className="nav-link">
                    Payment type List
                  </Link>
                </MenuItem>

              </Menu>
            </ProSidebar>
          </div>

          <div className="mainContainer">
            <Switch>
              <Route exact path={["/wheels"]} component={WheelList} />
              <Route exact path="/add/wheels" component={AddWheel} />
              <Route exact path="/edit/wheel" component={EditWheel} />
              <Route exact path="/delete/wheel" component={DeleteWheel} />

              <Route exact path={["/manufacturers"]} component={ManufacturerList} />
              <Route exact path="/add/manufacturers" component={AddManufacturer} />
              <Route exact path="/edit/manufacturer" component={EditManufacturer} />
              <Route exact path="/delete/manufacturer" component={DeleteManufacturer} />

              <Route exact path={["/engines"]} component={EngineList} />
              <Route exact path="/add/engines" component={AddEngine} />
              <Route exact path="/edit/engine" component={EditEngine} />
              <Route exact path="/delete/engine" component={DeleteEngine} />

              <Route exact path={["/employees"]} component={EmployeeList} />
              <Route exact path="/add/employees" component={AddEmployee} />
              <Route exact path="/edit/employees" component={EditEmployee} />
              <Route exact path="/delete/employees" component={DeleteEmployee} />

              <Route exact path={["/order_types"]} component={OrderTypeList} />
              <Route exact path="/add/order_types" component={AddOrderType} />
              <Route exact path="/edit/order_types" component={EditOrderType} />
              <Route exact path="/delete/order_types" component={DeleteOrderType} />

              <Route exact path={["/vehicle_models"]} component={VehicleModelList} />
              <Route exact path="/add/vehicle_models" component={AddVehicleModel} />
              <Route exact path="/edit/vehicle_models" component={EditVehicleModel} />
              <Route exact path="/delete/vehicle_models" component={DeleteVehicleModel} />

              <Route exact path={["/orders"]} component={OrdersList} />
              <Route exact path="/add/orders" component={AddOrder} />
              <Route exact path="/edit/orders" component={EditOrder} />
              <Route exact path="/delete/orders" component={DeleteOrder} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
