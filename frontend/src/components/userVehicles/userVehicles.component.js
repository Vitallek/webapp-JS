import React from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:5000/vehicle_models";

export default class UserVehicleModelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      vehicle_models: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const vehicle_models = res.data;
        this.setState({ vehicle_models });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div>
        <div className="">

          <div className="userVehicleContainer">

              { this.state.vehicle_models.map(Vehicle_models => 
                <div className="vehicleBlockWrapper m-5" key={Vehicle_models.id}>
                    <div className=""><img className='carPhoto m-2' src={process.env.PUBLIC_URL + `/carphoto/${Vehicle_models.id}.jpg`} alt={Vehicle_models.model_name}/></div>                   
                    <div className="">{Vehicle_models.model_name}</div> 
                    <div className="">{Vehicle_models.manufacturer_id}</div>          
                    <div className="">{Vehicle_models.type_id}</div>          
                    <div className="">{Vehicle_models.vehicle_stock_price}</div>          
                
                </div>
                )}
            </div>
          </div>
      </div>
    )
  }
}