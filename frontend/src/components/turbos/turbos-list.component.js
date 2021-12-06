import React from 'react';
import axios from 'axios';
import AddTurbo from './add-turbo.component';
import EditTurbo from './editTurbo.component';
import DeleteTurbo from './deleteTurbo.component';
import AddTurboAmount from './addTurboAmount';


const apiUrl = "http://localhost:5000/turbos";

export default class TurboList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      turbos: []
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const turbos = res.data;
        this.setState({ turbos });
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div>
        <div className="adminContainer">

          <div className="tableContainer">
            
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border tableHeader">Id</div>  
                  <div className="col border tableHeader">turbo Name</div>      
                  <div className="col border tableHeader">turbo Price</div> 
                  <div className="col border tableHeader">Amount</div>    
                </div>
              </div>

              { this.state.turbos.map(Turbos => 
                <div className="ml-3" key={Turbos.id}>
                  <div className="row" >  
                    <div className="col-1 border">{Turbos.id}</div>  
                    <div className="col border">{Turbos.turbo_name}</div>      
                    <div className="col border">{Turbos.turbo_price}</div> 
                    <div className="col border">{Turbos.amount}</div>       
                  </div>
                </div>
                )}
          </div>
          </div>
          <div className="col sidebar-wrapper">
          <div>
            <AddTurboAmount/>
          </div>
          <div>
            <AddTurbo/>
          </div>
          <div>
            <EditTurbo />
          </div>
          <div>
            <DeleteTurbo/>
          </div>
          </div>
      </div>
    )
  }
}