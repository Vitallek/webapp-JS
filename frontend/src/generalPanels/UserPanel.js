import React, { Component,useState, useEffect } from "react";
import axios from 'axios';
import {
  Outlet,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import UserOrders from "../components/userOrders/userOrders.component";
import UserVehicleModelList from "../components/userVehicles/userVehicles.component";
import "bootstrap/dist/css/bootstrap.min.css";
import './userStuff/User.css'
import 'react-pro-sidebar/dist/css/styles.css';

export default function UserPanel(){

  const navigate = useNavigate();
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
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
    <div className='bg1'>
      <div className=''>
        <nav className="navbar-expand-lg fixed-top navbar-dark user-nav-bg">
          <div className='scrollbar scrollbar-primary'>
            <ul className="navbar-nav scroll pl-3 pt-3">
              <li className="nav-item ml-2">
              <Link to={"/user"} className="navbar-brand">
                Vitallek Carshop
              </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user/orders"} className="nav-link">
                  My orders
                </Link>
              </li>

              <li className="nav-item logout ml-auto">
                <p className="navbar-brand ml-2" onClick={logout}>Log Out</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>


      <div className='carsMainBlock'>
        <UserVehicleModelList/>
      </div>


    <Routes>
      <Route path={`/user`} element={<UserVehicleModelList/>} />
      {/* <Route path={`/user/orders`} element={<UserOrders/>} />    */}
    </Routes>
    </div>
  )
}