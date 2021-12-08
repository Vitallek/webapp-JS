import React from 'react';
import axios from 'axios';
import {isActive,setActive} from 'react'
import { useNavigate } from 'react-router';

const apiUrl = "http://localhost:5000/cars";

export default class UserVehicleModelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      cars: [],
      car: [],
      currentCariD: 0,
      toggleCarsList: 'userVehicleContainer',
      toggleCarDescription: 'oneCarDescriptionHidden',
    }
    
  }

  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const cars = res.data;
        this.setState({ cars });
        
      }).catch(err => {
        console.log(err);
      })
  }

  handleChangeOpenCarDescription = event => {
    console.log(event.target.getAttribute("choosedCarID")); //will log the index of the clicked item
    this.setState({ currentCariD: event.target.getAttribute("choosedCarID") });
    this.setState({ toggleCarsList: 'userVehicleContainerHide' });

    axios.get(`http://localhost:5000/cars/${event.target.getAttribute("choosedCarID")}`)
      .then(res => {
        const car = res.data;
        this.setState({ car });
        
      }).catch(err => {
        console.log(err);
      })
    
    this.setState({ toggleCarDescription: 'oneCarDescription' });

  }
  render() {
    return (
      <div>
        <div className="">
          {/* one car */}
          <div className={`${this.state.toggleCarDescription}`}>
            { this.state.car.map(Car => 
              <div className="" key={Car.id}>
                <div className="" >  
                  <div className="">{Car.company_name}</div> 
                  <div className="">{Car.model_name}</div>          
                  <div className="">{Car.wheels_name}</div>          
                  <div className="">{Car.engine_name}</div>          
                  <div className="">{Car.transmission_name}</div>          
                  <div className="">{Car.turbo_name}</div>          
                  <div className="">{Car.vin}</div>          
                  <div className="">{Car.vehicle_stock_price}</div>          
                  <div className="">{Car.car_description}</div>          
                  <div className=""><img className='carPhotoAdmin m-2' src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}/></div>                   
                </div>
              </div>
              )}
          </div>

          {/* car list */}
          <div className={`${this.state.toggleCarsList}`}>

              { this.state.cars.map(Cars => 
                <div className='vehicleBlockWrapper m-5' choosedCarID={Cars.id} key={Cars.id} onClick={this.handleChangeOpenCarDescription}>
                    <div className="carPhotoWrapper" choosedCarID={Cars.id} ><img className='carPhoto' choosedCarID={Cars.id} src={process.env.PUBLIC_URL + `/carphoto/${Cars.id}.jpg`} alt={Cars.model_name}/></div>                   
                    <div className="carSmallInfowrapper mt-1">
                      <div className="" choosedCarID={Cars.id} >{Cars.model_name}</div> 
                      <div className="" choosedCarID={Cars.id} >{Cars.vehicle_stock_price} $</div>  
                    </div>        
                </div>
                )}
            </div>
          </div>
      </div>
    )
  }
}