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

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="sidenav">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem>
                  <Link to={"/tutorials"} className="navbar-brand">
                    Vitallek Autoshop
                  </Link>
                </MenuItem>

                <SubMenu title="Manufacturers">
                  <MenuItem>
                    <Link to={"/manufacturers"} className="nav-link">
                      Manufacturers List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/manufacturers"} className="nav-link">
                      Add manufacturer
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="VehicleModels">
                  <MenuItem>
                    <Link to={"/vehicleModels"} className="nav-link">
                      Vehicles List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/vehicleModels"} className="nav-link">
                      Add vehicle
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Engines">
                  <MenuItem>
                    <Link to={"/engines"} className="nav-link">
                      Engines List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/engines"} className="nav-link">
                      Add engine
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Turbos">
                  <MenuItem>
                    <Link to={"/turbos"} className="nav-link">
                      Turbos List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/turbos"} className="nav-link">
                      Add turbo
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Transmissions">
                  <MenuItem>
                    <Link to={"/transmissions"} className="nav-link">
                      Transmissions List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/transmissions"} className="nav-link">
                      Add transmission
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Wheels">
                  <MenuItem>
                    <Link to={"/wheels"} className="nav-link">
                      Wheels List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/wheels"} className="nav-link">
                      Add wheel
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="VehicleTypes">
                  <MenuItem>
                    <Link to={"/vehicleTypes"} className="nav-link">
                      Vehcle Types List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/vehicleTypes"} className="nav-link">
                      Add Vehicle Type
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Customers">
                  <MenuItem>
                    <Link to={"/customers"} className="nav-link">
                      Customers List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/customers"} className="nav-link">
                      Add Customer
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Employees">
                  <MenuItem>
                    <Link to={"/employees"} className="nav-link">
                      Employees List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/employees"} className="nav-link">
                      Add Employee
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Qualifications">
                  <MenuItem>
                    <Link to={"/qualitions"} className="nav-link">
                      Qualifications List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/qualifications"} className="nav-link">
                      Add Qualification
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="Orders">
                  <MenuItem>
                    <Link to={"/orders"} className="nav-link">
                      Orders List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/orders"} className="nav-link">
                      Add Order
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="OrderTypes">
                  <MenuItem>
                    <Link to={"/orderTypes"} className="nav-link">
                      Order type List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/orderTypes"} className="nav-link">
                      Add Order Type
                    </Link>
                  </MenuItem>
                </SubMenu>

                <SubMenu title="PaymentTypes">
                  <MenuItem>
                    <Link to={"/paymentTypes"} className="nav-link">
                      Payment type List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/add/paymentTypes"} className="nav-link">
                      Add Payment Type
                    </Link>
                  </MenuItem>
                </SubMenu>

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
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
