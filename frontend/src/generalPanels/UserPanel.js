import React, { Component } from "react";
import axios from 'axios';
import {
  Outlet,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import './userStuff/User.css'
import 'react-pro-sidebar/dist/css/styles.css';

export default function UserPanel(){

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()
    axios.get("http://localhost:5000/logout").then((response) => {
      return response
    });
    navigate('/guest')
  }
  
  return(
    <div className='bg1'>
      <div className=''>
        <nav className="navbar-expand-lg fixed-top navbar-dark user-nav-bg">
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
    </div>
  )
}