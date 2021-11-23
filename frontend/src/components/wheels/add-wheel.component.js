import React, { Component } from "react";
import WheelDataService from "../../services/wheel.service";

export default class AddWheel extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveWheel = this.saveWheel.bind(this);
    this.newWheel = this.newWheel.bind(this);

    this.state = {
      id: null,
      wheels_name: "",
      wheel_price: "", 
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      wheels_name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      wheels_price: e.target.value
    });
  }

  saveWheel() {
    var data = {
      wheels_name: this.state.wheels_name,
      wheels_price: this.state.wheels_price
    };

    WheelDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          wheels_name: response.data.wheels_name,
          wheels_price: response.data.wheels_price,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newWheel() {
    this.setState({
      id: null,
      wheels_name: "",
      wheels_price: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newWheel}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="wheels_name">wheels_name</label>
              <input
                type="text"
                className="form-control"
                id="wheels_name"
                required
                value={this.state.wheels_name}
                onChange={this.onChangeName}
                name="wheels_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="wheels_price">wheels_price</label>
              <input
                type="text"
                className="form-control"
                id="wheels_price"
                required
                value={this.state.wheels_price}
                onChange={this.onChangePrice}
                name="wheels_price"
              />
            </div>

            <button onClick={this.saveWheel} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
