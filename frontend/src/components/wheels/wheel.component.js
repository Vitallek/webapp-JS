import React, { Component } from "react";
import WheelDataService from "../../services/wheel.service";

export default class Wheel extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWheelsPrice = this.onChangeWheelsPrice.bind(this);
    this.getWheel = this.getWheel.bind(this);
    this.updateWheel = this.updateWheel.bind(this);
    this.deleteWheel = this.deleteWheel.bind(this);

    this.state = {
      currentWheel: {
        id: null,
        wheels_name: "",
        wheels_price: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getWheel(this.props.match.params.id);
  }

  onChangeName(e) {
    const wheels_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentWheel: {
          ...prevState.currentWheel,
          wheels_name: wheels_name
        }
      };
    });
  }

  onChangeWheelsPrice(e) {
    const wheels_price = e.target.value;
    
    this.setState(prevState => ({
      currentWheel: {
        ...prevState.currentWheel,
        wheels_price: wheels_price
      }
    }));
  }

  getWheel(id) {
    WheelDataService.get(id)
      .then(response => {
        this.setState({
          currentWheel: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateWheel() {
    WheelDataService.update(
      this.state.currentWheel.id,
      this.state.currentWheel
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The wheel was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteWheel() {    
    WheelDataService.delete(this.state.currentWheel.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/wheels')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentWheel } = this.state;

    return (
      <div>
        {currentWheel ? (
          <div className="edit-form">
            <h4>Wheels</h4>
            <form>
              <div className="form-group">
                <label htmlFor="wheels_name">wheels_name</label>
                <input
                  type="text"
                  className="form-control"
                  id="wheels_name"
                  value={currentWheel.wheels_name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="wheels_price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="wheels_price"
                  value={currentWheel.wheels_price}
                  onChange={this.onChangeWheelsPrice}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteWheel}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateWheel}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Wheel...</p>
          </div>
        )}
      </div>
    );
  }
}
