import React from 'react';
import axios from 'axios';
import {isActive,setActive} from 'react'
import { useNavigate } from 'react-router';

export default class UserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      orders: [],
    }
  }

  componentDidMount() {

    axios.get("http://localhost:5000/login").then((response) => {
      this.setState({ customer_email: response.data.user[0].email });

      axios.get(`http://localhost:5000/orders/get/${response.data.user[0].email}`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });

      }).catch(err => {
        console.log(err);
      })
    });   
   
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
                    <form className="table table-sm table-borderless mb-0" onSubmit={this.handleSubmit}>
                      <tbody>
                        <tr>
                          <th className="w-25"><strong>Engine</strong></th>
                            <td>
                              <select onChange={this.handleChangeSwitchEngine} className="form-control w-75">  
                                <option value={1}>Stock</option>
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
                            <option value={1}>Stock</option>
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
                            <option value={1}>Stock</option>
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
                            <option value={1}>Stock</option>
                              { this.state.wheels.map(Wheels => 
                                <option key={Wheels.id} value={Wheels.id} price={Wheels.wheels_price}>{Wheels.wheels_name}</option>
                              )}
                            </select>
                          </td>
                        </tr>
                        <hr/>
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
                      <hr/>
                      {/* <div className="w-50"><strong>Total price: ${Car.vehicle_stock_price}</strong></div> */}
                      <button type="submit" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* car list */}
          <div className={`${this.state.toggleCarsList}`}>
            { this.state.cars.map(Cars => 
                <div className='vehicleBlockWrapper m-5' choosedOrderID={Cars.id} key={Cars.id} onClick={this.handleChangeOpenCarDescription}>
                    <div className="carPhotoWrapper" choosedOrderID={Cars.id} ><img className='carPhoto' choosedOrderID={Cars.id} src={process.env.PUBLIC_URL + `/carphoto/${Cars.id}.jpg`} alt={Cars.model_name}/></div>                   
                    <div className="carSmallInfowrapper mt-1">
                      <div className="" choosedOrderID={Cars.id} >{Cars.model_name}</div> 
                      <div className="" choosedOrderID={Cars.id} >{Cars.vehicle_stock_price} $</div>  
                    </div>        
                </div>
              )}
            </div>
        </div>
      </div>
    )
  }
}