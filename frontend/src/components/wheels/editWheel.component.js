import React from 'react';
import axios from 'axios';

export default class EditWheel extends React.Component {
  
  state = {
    id: '',
    wheels_name: '',
    wheels_price: '',
    amount: 0,
  }
  

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeName = event => {
    this.setState({ wheels_name: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ wheels_price: event.target.value });
  }
  handleChangeAmount = event => {
    this.setState({ amount: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const wheel = {
      wheels_name: this.state.wheels_name,
      wheels_price: this.state.wheels_price,
      amount: this.state.amount,

    };

    axios.put('http://localhost:5000/wheels/update/'+this.state.id, wheel)
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
            wheel id:
            <input onChange={this.handleChangeId} required className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            wheel name:
            <input onChange={this.handleChangeName} required className="form-control" type="name" name="wheels_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            wheel price:
            <input onChange={this.handleChangePrice} required className="form-control" type="price" name="wheels_price" placeholder="Enter price"/>
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
