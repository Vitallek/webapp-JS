import React from 'react';
import axios from 'axios';
import AddEngine from './add-engine.component';
import EditEngine from './editEngine.component';
import DeleteEngine from './deleteEngine.component';
import AddEngineAmount from './addEngineAmount';


const apiUrl = "http://localhost:5000/engines";

export default class EngineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      car_engines: []
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const car_engines = res.data;
        this.setState({ car_engines });
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
                  <div className="col border tableHeader">Engine Name</div>      
                  <div className="col border tableHeader">Engine Price</div> 
                  <div className="col border tableHeader">Amount</div>    
                </div>
              </div>

              { this.state.car_engines.map(Car_engines => 
                <div className="ml-3"  key={Car_engines.id}>
                  <div className="row" >  
                    <div className="col-1 border">{Car_engines.id}</div>  
                    <div className="col border">{Car_engines.engine_name}</div>      
                    <div className="col border">{Car_engines.engine_price}</div>    
                    <div className="col border">{Car_engines.amount}</div>                    
                  </div>
                </div>
                )}
          </div>
          </div>
          <div className="col sidebar-wrapper">
          <div>
            <AddEngineAmount/>
          </div>
          <div>
            <AddEngine/>
          </div>
          <div>
            <EditEngine />
          </div>
          <div>
            <DeleteEngine/>
          </div>
          </div>
      </div>
    )
  }
}