import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import 'react-pro-sidebar/dist/css/styles.css';


import AddOrder from "../components/orders/add-order.component";
import OrdersList from "../components/orders/orders-list.component";
import EditOrder from "../components/orders/editOrder.component";
import DeleteOrder from "../components/orders/deleteOrder.component";

class EmpPanel extends React.Component {
  render(){
    return(
        <div>
          <div className="sidenav">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem>
                  <Link to={"/"} className="navbar-brand ">
                    Employee Panel
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to={"/orders"} className="nav-link">
                    Orders List
                  </Link>
                </MenuItem>

              </Menu>
            </ProSidebar>
          </div>

          <div className="mainContainer">
            
          </div>
    </div>
    )
  }
}
export default EmpPanel;
