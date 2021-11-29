import React from 'react';
import axios from 'axios';

export default class EditTransmission extends React.Component {
  
  state = {
    id: '',
    transmission_name: '',
    transmission_price: 0
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeName = event => {
    this.setState({ transmission_name: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ transmission_price: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const transmission = {
      transmission_name: this.state.transmission_name,
      transmission_price: this.state.transmission_price
    };

    axios.put('http://localhost:5000/transmissions/update/'+this.state.id, transmission)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            transmission id:
            <input onChange={this.handleChangeId} className="form-control" type="number" name="id" required placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            transmission name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="transmission_name"maxLength="30" required placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            transmission price:
            <input onChange={this.handleChangePrice} className="form-control" type="number"maxLength="10" required name="transmission_price" placeholder="Enter price"/>
          </label>
          <button type="submit" className="btn btn-warning" >Update</button>
        </form>
      </div>
    );
  }
}
