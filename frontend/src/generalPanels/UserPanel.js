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
    <div classNameName='bg1'>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark my-custom-scrollbar my-custom-scrollbar-primary">
        <a className="navbar-brand" href="#">Vitallek Carshop</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-link d-flex justify-content-center align-items-center mb-3" onClick={logout}>
              <p className='user-select-none'>Log Out</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}