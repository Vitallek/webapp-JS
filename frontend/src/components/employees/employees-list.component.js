import React from 'react';
import axios from 'axios';
import AddEmployee from './add-empoloyee.component';
import EditEmployee from './editEmpoloyee.component';
import DeleteEmployee from './deleteEmpoloyee.component';


const apiUrl = "http://localhost:5000/employees";

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      employees: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div >
        <div className="adminContainer">
          <div className="tableContainer">        
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border tableHeader">Id</div>  
                  <div className="col border tableHeader">Employee's First Name</div> 
                  <div className="col border tableHeader">Employee's Last Name</div> 
                  <div className="col border tableHeader">Employee's qualification</div>
                  <div className="col border tableHeader">Is working</div>          
                </div>
              </div>

              { this.state.employees.map(Employees => 
                <div className="ml-3" key={Employees.id}>
                  <div className="row">  
                    <div className="col-1 border" >{Employees.id}</div>  
                    <div className="col border">{Employees.first_name}</div>      
                    <div className="col border">{Employees.last_name}</div>
                    <div className="col border">{Employees.qualification_id}</div>  
                    <div className="col border">{Employees.isFree}</div>        
                  </div>
                </div>
                )}
          </div>
        </div>
        <div className="col sidebar-wrapper">
          <div>
            <AddEmployee/>
            
          </div>
          <div>
            <EditEmployee />
          </div>
          <div>
            <DeleteEmployee/>
          </div>
        </div>
      </div>
    )
  }
}