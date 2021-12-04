import React from 'react';
import axios from 'axios';

export default class AddEngine extends React.Component {
  state = {
    engine_name: '',
    engine_price: 0,
    amount: 0
  }

  handleChangeName = event => {
    this.setState({ engine_name: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ engine_price: event.target.value });
  }
  handleChangeAmount = event => {
    this.setState({ amount: event.target.value });
  }
  

  handleSubmit = event => {
    event.preventDefault();

    const engine = {
      engine_name: this.state.engine_name,
      engine_price: this.state.engine_price,
      amount: this.state.amount,
    };

    axios.post('http://localhost:5000/engines/create', engine)
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
      <div className="float-right p-4 mb-4 bg-dark text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            Engine name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="engine_name" placeholder="Enter name" maxLength="30" required/>
          </label>
          <label className="form-outline mb-4">
            Engine price:
            <input onChange={this.handleChangePrice} className="form-control" type="number" name="engine_price" placeholder="Enter price" maxLength="10" required/>
          </label>
          <label className="form-outline mb-4">
            Amount:
            <input onChange={this.handleChangeAmount} className="form-control" type="number" name="amount" placeholder="Enter amount" maxLength="10" required/>
          </label>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
