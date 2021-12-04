import React from 'react';
import axios from 'axios';
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
      <div className="adminContainer">

        <div className="mt-3 userTableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="usercol border tableHeader">Id</div>  
                <div className="usercol border tableHeader">FIO</div> 
                <div className="usercol border tableHeader">email</div>      
                <div className="usercol border tableHeader">password</div>      
                <div className="usercol border tableHeader">role</div>                 
              </div>
            </div>

            { this.state.userrrs.map(Userrrs => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="usercol border" key={Userrrs.id}>{Userrrs.id}</div>  
                  <div className="usercol border">{Userrrs.FnameLname}</div>
                  <div className="usercol border">{Userrrs.email}</div>                  
                  <div className="usercol border">{Userrrs.password}</div>         
                  <div className="usercol border">{Userrrs.role}</div>         
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