import React from 'react';
import axios from 'axios';

export default class AddWheel extends React.Component {
  state = {
    wheels_name: '',
    wheels_price: ''
  }

  handleChangeName = event => {
    this.setState({ wheels_name: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ wheels_price: event.target.value });
  }
  

  handleSubmit = event => {
    event.preventDefault();

    const wheel = {
      wheels_name: this.state.wheels_name,
      wheels_price: this.state.wheels_price
    };

    axios.post('http://localhost:5000/wheels/create', wheel)
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
            wheel name:
            <input onChange={this.handleChangeName} required className="form-control" type="name" name="wheels_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            wheel price:
            <input onChange={this.handleChangePrice} required className="form-control" type="price" name="wheels_price" placeholder="Enter price" />
          </label>
          <button type="submit"  className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
