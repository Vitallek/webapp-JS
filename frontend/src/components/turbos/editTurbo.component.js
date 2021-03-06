import React from 'react';
import axios from 'axios';

export default class EditTurbo extends React.Component {
  
  state = {
    id: '',
    turbo_name: '',
    turbo_price: 0,
    amount: 0,
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeName = event => {
    this.setState({ turbo_name: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ turbo_price: event.target.value });
  }
  handleChangeAmount = event => {
    this.setState({ amount: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const turbo = {
      turbo_name: this.state.turbo_name,
      turbo_price: this.state.turbo_price,
      amount: this.state.amount,

    };

    axios.put('http://localhost:5000/turbos/update/'+this.state.id, turbo)
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
            turbo id:
            <input onChange={this.handleChangeId} className="form-control" type="number" name="id" required placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            turbo name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="turbo_name"maxLength="30" required placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            turbo price:
            <input onChange={this.handleChangePrice} className="form-control" type="number"maxLength="10" required name="turbo_price" placeholder="Enter price"/>
          </label>
          <label className="form-outline mb-4">
            Amount:
            <input onChange={this.handleChangeAmount} className="form-control" type="number" name="amount" placeholder="Enter amount" maxLength="10" required/>
          </label>
          <button type="submit" className="btn btn-warning" >Update</button>
        </form>
      </div>
    );
  }
}
