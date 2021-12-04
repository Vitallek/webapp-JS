import React from 'react';
import axios from 'axios';
import AddTransmission from './add-transmission.component';
import EditTransmission from './editTransmission.component';
import DeleteTransmission from './deleteTransmission.component';


const apiUrl = "http://localhost:5000/transmissions";

export default class TransmissionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      transmissions: []
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const transmissions = res.data;
        this.setState({ transmissions });
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="adminContainer">

        <div className="mt-3 tableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="col-1 border tableHeader">Id</div>  
                <div className="col border tableHeader">Transmission Name</div>      
                <div className="col border tableHeader">Transmission Price</div>
                <div className="col border tableHeader">Amount</div>    
              </div>
            </div>

            { this.state.transmissions.map(Transmissions => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Transmissions.id}>{Transmissions.id}</div>  
                  <div className="col border">{Transmissions.transmission_name}</div>      
                  <div className="col border">{Transmissions.transmission_price}</div>
                  <div className="col border">{Transmissions.amount}</div>        
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddTransmission/>
            </div>
            <div>
              <EditTransmission />
            </div>
            <div>
              <DeleteTransmission/>
            </div>
          </div>
      </div>
    )
  }
}