import React from 'react';
import axios from 'axios';
import {isActive,setActive} from 'react'
import { useNavigate } from 'react-router';

export default class UserVehicleModelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      cars: [],
      car: [],
      currentCariD: 0,
      toggleCarsList: 'userVehicleContainer',
      toggleCarDescription: 'oneCarDescriptionHidden',
      backArrow: 'arrowBackHidden',

      switchEngine: 0,
      switchWheels: 0,
      switchTurbo: 0,
      switchTransmissions: 0,

      engines: [],
      wheels: [],
      turbos: [],
      transmissions: [],

    }
    
  }

  componentDidMount() {
    axios.get("http://localhost:5000/cars")
      .then(res => {
        const cars = res.data;
        this.setState({ cars });
        
      }).catch(err => {
        console.log(err);
      })

    axios.get("http://localhost:5000/engines/view")
    .then(res => {
      const engines = res.data;
      this.setState({ engines });
      
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:5000/turbos/view")
    .then(res => {
      const turbos = res.data;
      this.setState({ turbos });
      
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:5000/transmissions/view")
    .then(res => {
      const transmissions = res.data;
      this.setState({ transmissions });
      
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:5000/wheels/view")
    .then(res => {
      const wheels = res.data;
      this.setState({ wheels });
      
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
    this.setState({ backArrow: 'arrowBack' });

  }

  handleChangeSwitchEngine = event => {
    this.setState({ switchEngine: parseInt(event.target.value, 10) });
  }
  handleChangeSwitchWheels = event => {
    this.setState({ switchWheels: parseInt(event.target.value, 10) });
  }
  handleChangeSwitchTurbo = event => {
    this.setState({ switchTurbo: parseInt(event.target.value, 10) });
  }
  handleChangeSwitchTransmissions = event => {
    this.setState({ switchTransmissions: parseInt(event.target.value, 10) });
  }

  handleChangeGoBackToList = event => {
    this.setState({ toggleCarsList: 'userVehicleContainer' });
    this.setState({ toggleCarDescription: 'oneCarDescriptionHide' });
    this.setState({ backArrow: 'arrowBackHide' });

  }

  render() {
    return (
      <div>
        <div className="">
          {/* one car */}
          <div className={`${this.state.toggleCarDescription}`}>
          { this.state.car.map(Car => 
            <div>
                  {/* arrow */}
              <img src={require('../../arrowBack.svg')} className={`${this.state.backArrow}`} onClick={this.handleChangeGoBackToList}/>

              <div className="row mt-1">
                {/* car photo */}
                <div className="col-md-6 mb-4 mb-md-0">

                  <div id="mdb-lightbox-ui"></div>

                  <div className="mdb-lightbox">

                    <div className="row product-gallery mx-1">
                      <div className="col-12 mb-0">
                        <figure className="view overlay rounded z-depth-1 main-img">
                        <img className='img-fluid z-depth-1' src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}/>
                        </figure>
                      </div>
                      <div class="col-12">
                        <div class="row">
                          <div class="col-3">
                            <div class="view overlay rounded z-depth-1 gallery-item">
                              <img src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}
                                class="img-fluid"/>
                              <div class="mask rgba-white-slight"></div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="view overlay rounded z-depth-1 gallery-item">
                              <img src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}
                                class="img-fluid"/>
                              <div class="mask rgba-white-slight"></div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="view overlay rounded z-depth-1 gallery-item">
                              <img src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}
                                class="img-fluid"/>
                              <div class="mask rgba-white-slight"></div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="view overlay rounded z-depth-1 gallery-item">
                              <img src={process.env.PUBLIC_URL + `/carphoto/${Car.id}.jpg`} alt={Car.model_name}
                                class="img-fluid"/>
                              <div class="mask rgba-white-slight"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-md-6">

                  <h5>{Car.model_name}</h5>
                  <p className="mb-2 text-muted text-uppercase small">{Car.company_name}</p>
                  
                  <p><span className="mr-1"><strong>${Car.vehicle_stock_price}</strong></span></p>
                  <p className="pt-1">{Car.car_description}</p>
                  <div className="table-responsive">
                    <form className="table table-sm table-borderless mb-0">
                      <tr>
                        <th className="w-25"><strong>Engine</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchEngine} className="form-control w-75">  
                              { this.state.engines.map(Engines => 
                                <option key={Engines.id} value={Engines.id}>{Engines.engine_name}</option>
                              )}
                            </select>
                          </td>
                      </tr>
                      <tr>
                        <th className="w-25"><strong>Turbo</strong></th>
                        <td>
                          <select onChange={this.handleChangeSwitchTurbo} className="form-control w-75">
                            <option value="1">Стандарт</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-25"><strong>Transmission</strong></th>
                        <td>
                          <select onChange={this.handleChangeSwitchTransmissions} className="form-control w-75">
                            <option value="1">Стандарт</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-25"><strong>Wheels</strong></th>
                        <td>
                          <select onChange={this.handleChangeSwitchWheels} className="form-control w-75">
                            <option value="1">Стандарт</option>
                          </select>
                        </td>
                      </tr>
                    </form>
                  </div>
                  <hr/>
                  <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                </div>
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