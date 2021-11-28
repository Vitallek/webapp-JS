import React from 'react';
import axios from 'axios';

export default class EditVehicleModel extends React.Component {
  
  state = {
    id: '',
    model_name: '',
    manufacturer_id: '',
    vin: '',
    type_id: '',
    engine_id: '',
    transmission_id: '',
    turbo_id: '',
    wheels_id: '',
    vehicle_stock_price: '',
    car_description: '',
    is_sold: '',
    photo_path: '',
  }
  
  hardRefresh(){
    window.location.reload();
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeModelName = event => {
    this.setState({ model_name: event.target.value });
  }
  handleChangeManufacturerID = event => {
    this.setState({ manufacturer_id: event.target.value });
  }
  handleChangeVin = event => {
    this.setState({ vin: event.target.value });
  }
  handleChangeTypeID = event => {
    this.setState({ type_id: event.target.value });
  }
  handleChangeEngineID = event => {
    this.setState({ engine_id: event.target.value });
  }
  handleChangeTransmissionID = event => {
    this.setState({ transmission_id: event.target.value });
  }
  handleChangeTurboID = event => {
    this.setState({ turbo_id: event.target.value });
  }
  handleChangeWheelsID = event => {
    this.setState({ wheels_id: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ vehicle_stock_price: event.target.value });
  }
  handleChangeDescription = event => {
    this.setState({ car_description: event.target.value });
  }
  handleChangePhoto = event => {
    this.setState({ photo_path: event.target.value });
  }
  handleChangeAvailable = event => {
    this.setState({ is_sold: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const vehicle_models = {
      model_name: this.state.model_name,
      manufacturer_id: this.state.manufacturer_id,
      vin: this.state.vin,
      type_id: this.state.type_id,
      engine_id: this.state.engine_id,
      transmission_id: this.state.transmission_id,
      turbo_id: this.state.turbo_id,
      wheels_id: this.state.wheels_id,
      vehicle_stock_price: this.state.vehicle_stock_price,
      car_description: this.state.car_description,
      is_sold: this.state.is_sold,
      photo_path: this.state.photo_path,
    };

    axios.put('http://localhost:5000/vehicle_models/update/'+this.state.id, vehicle_models)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            vehicle_models Id:
            <input onChange={this.handleChangeId} className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            vehicle_model Name:
            <input onChange={this.handleChangeModelName} className="form-control" type="name" name="model_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            vehicle_model manufacturer id:
            <input onChange={this.handleChangeManufacturerID} placeholder="Enter id"  className="form-control" type="price" name="manufacturer_id" />
          </label>
          <label className="form-outline mb-4">
            vehicle vin:
            <input onChange={this.handleChangeVin} placeholder="Enter vin"className="form-control" type="name" name="carvin"  />
          </label>
          <label className="form-outline mb-4">
            vehicle type:
            <input onChange={this.handleChangeTypeID} placeholder="Enter type"className="form-control" type="name" name="cartype"  />
          </label>
          <label className="form-outline mb-4">
            vehicle engine id:
            <input onChange={this.handleChangeEngineID} placeholder="Enter engine id"className="form-control" type="name" name="carengine"  />
          </label>
          <label className="form-outline mb-4">
            vehicle transmission:
            <input onChange={this.handleChangeTransmissionID} placeholder="Enter transmission id"className="form-control" type="name" name="cartransmssion"  />
          </label>
          <label className="form-outline mb-4">
            vehicle turbo :
            <input onChange={this.handleChangeTurboID} placeholder="Enter turbo id"className="form-control" type="name" name="carturbo"  />
          </label>
          <label className="form-outline mb-4">
            vehicle wheels:
            <input onChange={this.handleChangeWheelsID} placeholder="Enter wheels id"className="form-control" type="name" name="carwheels"  />
          </label>
          <label className="form-outline mb-4">
            vehicle price:
            <input onChange={this.handleChangePrice} placeholder="Enter price"className="form-control" type="name" name="carprice"  />
          </label>
          <label className="form-outline mb-4">
            vehicle description:
            <input onChange={this.handleChangeDescription} placeholder="Enter description"className="form-control" type="name" name="cardescription"  />
          </label>

          <label className="form-outline mb-4">
            vehicle availability:
          <select onChange={this.handleChangeAvailable} className="form-control" type="name" name="carability">
            <option>Available</option>
            <option>Busy</option>
            <option>Sold</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            vehicle photo path:
            <input onChange={this.handleChangePhoto} placeholder="Enter photo path"className="form-control" type="name" name="carphoto"  />
          </label>
          <button type="submit" className="btn btn-warning" onClick={this.hardRefresh}>Update</button>
        </form>
      </div>
    );
  }
}
