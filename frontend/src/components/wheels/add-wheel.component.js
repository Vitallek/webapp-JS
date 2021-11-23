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
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="submit-form">
      <form onSubmit={this.handleSubmit}>
        <label>
          wheel name:
          <input type="text" name="wheels_name" onChange={this.handleChangeName} />
        </label>
        <label>
          wheel price:
          <input type="text" name="wheels_price" onChange={this.handleChangePrice} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
    );
  }
}
