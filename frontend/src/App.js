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
                  <Link to={"/vehicleModels"} className="nav-link">
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
                  <Link to={"/orderTypes"} className="nav-link">
                    Order type List
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/paymentTypes"} className="nav-link">
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
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
