import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./generalPanels/guestStuff/guest.css"


export default function GuestPanel() {
    const navigate = useNavigate();
    const [FnameLnameReg, setFnameLnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    axios.defaults.withCredentials = true;

    const register = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/register", {
        FnameLname: FnameLnameReg,
        email: emailReg,
        password: passwordReg,
    }).then((response) => {
        console.log(response);
    });
  };

  const login = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    }).then((response) => {
        console.log(response)
        navigate('/');
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

    return(
        <div className="body">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <div className="display-3 text-light">Vitallek Autoshop</div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col login-margin">
                        <div className="p-0">
                            <h3 className="mb-4 text-center text-light">Please, log in</h3>

                            <form  onSubmit={login} className="signin-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" required onChange={(e) => { setemail(e.target.value); }}/>
                                </div>
                                <div className="form-group">
                                    <input id="password-field" type="password" className="form-control" placeholder="Password" required onChange={(e) => { setPassword(e.target.value); }}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col register-margin">
                        <div className="login-wrap p-0">
                            <h3 className="mb-4 text-center text-light">Or, create a new account</h3>
                            <form onSubmit={register} className="signin-form">

                            <div className="form-group">
                                <input type="text" required maxLength="30" placeholder="Firstname Lastname" onChange={(e) => { setFnameLnameReg(e.target.value); }} className="form-control" />
                            </div>

                            <div className="form-group">
                                <input type="text" required maxLength="50" placeholder="Email" onChange={(e) => { setEmailReg(e.target.value); }} className="form-control" />
                            </div>
        
                            <div className="form-group">
                                <input type="text" required minLength="6" placeholder="Password" onChange={(e) => { setPasswordReg(e.target.value); }} className="form-control" />
                            </div>

                            <button type="submit" className="form-control btn btn-primary submit px-3"> Register </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
