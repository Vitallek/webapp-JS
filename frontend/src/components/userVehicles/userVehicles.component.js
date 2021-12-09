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

      switchEnginePrice: 0,
      switchWheelsPrice: 0,
      switchTurboPrice: 0,
      switchTransmissionsPrice: 0,
      orderTypeKoef: 0,
      qualKoef: 0,

      engines: [],
      wheels: [],
      turbos: [],
      transmissions: [],

      qualifications: [],
      paymentTypes: [],
      orderTypes: [],
      employees: [],

      // на отправку
      shop_name: 'Vitallek`s Shop',
      emp_id: 0,
      vehicle_id: 0,
      order_date: require('moment')().format('YYYY-MM-DD HH:mm:ss'),
      order_type: 0,
      payment_type: 0,
      customer_id: 0,
      status: 'pending',
      totalPrice: 0,
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

    axios.get("http://localhost:5000/qualifications/view")
    .then(res => {
      const qualifications = res.data;
      this.setState({ qualifications });
      
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:5000/payment_types/view")
    .then(res => {
      const paymentTypes = res.data;
      this.setState({ paymentTypes });
      
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:5000/order_types/view")
    .then(res => {
      const orderTypes = res.data;
      this.setState({ orderTypes });
      
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
    this.setState({ switchEnginePrice: event.target.price });
  }
  handleChangeSwitchWheels = event => {
    this.setState({ switchWheels: parseInt(event.target.value, 10) });
    this.setState({ switchWheelsPrice: event.target.price });
  }
  handleChangeSwitchTurbo = event => {
    this.setState({ switchTurbo: parseInt(event.target.value, 10) });
    this.setState({ switchTurboPrice: event.target.price });
  }
  handleChangeSwitchTransmissions = event => {
    this.setState({ switchTransmissions: parseInt(event.target.value, 10) });
    this.setState({ switchTransmissionsPrice: event.target.price });
  }

  handleChangeSwitchPaymentType = event => {
    this.setState({ payment_type: event.target.value });
  }
  handleChangeSwitchOrderType = event => {
    this.setState({ order_type: event.target.value });
    this.setState({ orderTypeKoef: event.target.koef });
  }
  handleChangeSwitchQual = event => {
    this.setState({ payment_type: event.target.value });
    this.setState({ orderTypeKoef: event.target.koef });
  }
  handleChangeSwitchEmployee = event => {
    this.setState({ order_type: event.target.value });
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
                      <tbody>
                        <tr>
                          <th className="w-25"><strong>Engine</strong></th>
                            <td>
                              <select onChange={this.handleChangeSwitchEngine} className="form-control w-75">  
                                { this.state.engines.map(Engines => 
                                  <option key={Engines.id} value={Engines.id} price={Engines.engine_price}>{Engines.engine_name}</option>
                                )}
                              </select>
                            </td>
                        </tr>
                        <tr>
                          <th className="w-25"><strong>Turbo</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchTurbo} className="form-control w-75">  
                              { this.state.turbos.map(Turbo => 
                                <option key={Turbo.id} value={Turbo.id} price={Turbo.turbo_price}>{Turbo.turbo_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th className="w-25"><strong>Transmission</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchTransmissions} className="form-control w-75">  
                              { this.state.transmissions.map(Transmissions => 
                                <option key={Transmissions.id} value={Transmissions.id} price={Transmissions.transmission_price}>{Transmissions.transmission_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th className="w-25"><strong>Wheels</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchWheels} className="form-control w-75">  
                              { this.state.wheels.map(Wheels => 
                                <option key={Wheels.id} value={Wheels.id} price={Wheels.wheels_price}>{Wheels.wheels_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <hr/>
                        <tr>
                          <th className="w-25"><strong>Choose employeer:</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchQual} className="form-control w-75">  
                              { this.state.qualifications.map(Qualifications => 
                                <option key={Qualifications.id} value={Qualifications.id} koef={Qualifications.koef}>{Qualifications.qual_name}</option>
                              )}
                            </select>
                            <select onChange={this.handleChangeSwitchWheels} className="form-control w-75">  
                              { this.state.wheels.map(Wheels => 
                                <option key={Wheels.id} value={Wheels.id} price={Wheels.wheels_price}>{Wheels.wheels_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th className="w-25"><strong>Order type:</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchOrderType} className="form-control w-75">  
                              { this.state.orderTypes.map(OrderTypes => 
                                <option key={OrderTypes.id} value={OrderTypes.id} koef={OrderTypes.koef}>{OrderTypes.type_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th className="w-25"><strong>Payment type:</strong></th>
                          <td>
                            <select onChange={this.handleChangeSwitchPaymentType} className="form-control w-75">  
                              { this.state.paymentTypes.map(PaymentTypes => 
                                <option key={PaymentTypes.id} value={PaymentTypes.id} koef={PaymentTypes.koef}>{PaymentTypes.type_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </form>
                  </div>
                  <hr/>
                  <div className="w-50"><strong>Total price: ${Car.vehicle_stock_price}</strong></div>
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