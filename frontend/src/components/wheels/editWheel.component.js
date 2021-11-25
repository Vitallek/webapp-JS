import React from 'react';
import axios from 'axios';

export default class EditWheel extends React.Component {
  
  state = {
    id: '',
    wheels_name: '',
    wheels_price: ''
  }
  
  hardRefresh(){
    window.location.reload();
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

  handleSubmit = event => {
    event.preventDefault();

    const wheel = {
      wheels_name: this.state.wheels_name,
      wheels_price: this.state.wheels_price
    };

    axios.put('http://localhost:5000/wheels/update/'+this.state.id, wheel)
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
            wheel id:
            <input onChange={this.handleChangeId} className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            wheel name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="wheels_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            wheel price:
            <input onChange={this.handleChangePrice} className="form-control" type="price" name="wheels_price" placeholder="Enter price"/>
          </label>
          <button type="submit" className="btn btn-warning" onClick={this.hardRefresh}>Update</button>
        </form>
      </div>
    );
  }
}
