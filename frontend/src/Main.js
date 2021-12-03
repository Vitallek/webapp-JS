import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes, Navigate, Outlet } from 'react-router';
import Axios from "axios";

export default function Main() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      } else {navigate('/guest')}
    });
  }, []);


  return (
    <div>
      {role === "user" &&  <Navigate from="/" to="/user" />}
      {role === "emp" &&  <Navigate from="/" to="/emp" />}
      {role === "admin" && <Navigate from="/" to="/admin" />}
    </div>
    
    
  );
}