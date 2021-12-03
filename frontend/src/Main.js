import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";
import UserPanel from "./generalPanels/UserPanel";
import EmpPanel from "./generalPanels/EmpPanel";
import AdminPanel from "./generalPanels/AdminPanel";

export default function Main() {
  const [role, setRole] = useState("");

  const history = useHistory();
  const navigateToGuest = () => history.push('/guest');//eg.history.push('/login');

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      } else { navigateToGuest() }
    });
  }, []);

  return (
    <div>
      {role === "user" && <UserPanel/>}
      {role === "emp" && <EmpPanel/>}
      {role === "admin" && <AdminPanel/>}
    </div>
  );
}