import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import EditUser from './editUser.component';
import DeleteUser from './deleteUser.component';


const apiUrl = "http://localhost:5000/userrrs";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      userrrs: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const userrrs = res.data;
        this.setState({ userrrs });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="container">

        <div className="mt-3 TableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="col border tableHeader">Id</div>  
                <div className="col border tableHeader">FIO</div> 
                <div className="col border tableHeader">email</div>      
                <div className="col border tableHeader">password</div>      
                <div className="col border tableHeader">role</div>                 
              </div>
            </div>

            { this.state.userrrs.map(Userrrs => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col border" key={Userrrs.id}>{Userrrs.id}</div>  
                  <div className="col border">{Userrrs.FnameLname}</div>
                  <div className="col border">{Userrrs.email}</div>                  
                  <div className="col border">{Userrrs.password}</div>         
                  <div className="col border">{Userrrs.role}</div>         
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <EditUser />
            </div>
            <div>
              <DeleteUser/>
            </div>
          </div>
      </div>
    )
  }
}