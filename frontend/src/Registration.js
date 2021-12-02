import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

export default function Registration() {
    const [FnameLnameReg, setFnameLnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
    Axios.post("http://localhost:5000/register", {
        FnameLname: FnameLnameReg,
        email: emailReg,
        password: passwordReg,
    }).then((response) => {
        console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>First name Last name</label>
        <input
          type="text" required maxLength="30"
          onChange={(e) => {
            setFnameLnameReg(e.target.value);
          }}
        />
        <label>email</label>
        <input
          type="text" required maxLength="50"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text" required minLength="6"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input
          type="text" requied maxLength="50"
          placeholder="email..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password" required minLength="6"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}