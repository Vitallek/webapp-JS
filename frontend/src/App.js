import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-pro-sidebar/dist/css/styles.css';

import AddWheel from "./components/wheels/add-wheel.component";
import Wheel from "./components/wheels/wheel.component";
import WheelsList from "./components/wheels/wheels-list.component";

class App extends Component {
  render() {
    return (
      <div class="row mainContainer">
        <div class="">
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>
                <Link to={"/tutorials"} className="navbar-brand">
                  Vitallek Autoshop
                </Link>
              </MenuItem>

              <SubMenu title="Tutorials">
                <MenuItem>
                  <Link to={"/tutorials"} className="nav-link">
                    Tutorials List
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/add"} className="nav-link">
                    Add Tutorial
                  </Link>
                </MenuItem>
              </SubMenu>

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

        <div className="mt-3">
          <Switch>
            <Route exact path={["/wheels"]} component={WheelsList} />
            <Route exact path="/add/wheels" component={AddWheel} />
            <Route path="/wheels/:id" component={Wheel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
