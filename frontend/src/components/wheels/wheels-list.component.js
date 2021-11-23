import React, { Component } from "react";
import WheelDataService from "../../services/wheel.service";
import { Link } from "react-router-dom";

export default class WheelsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveWheels = this.retrieveWheels.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveWheel = this.setActiveWheel.bind(this);
    this.removeAllWheels = this.removeAllWheels.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      wheels: [],
      currentWheel: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveWheels();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveWheels() {
    WheelDataService.getAll()
      .then(response => {
        this.setState({
          wheels: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveWheels();
    this.setState({
      currentWheel: null,
      currentIndex: -1
    });
  }

  setActiveWheel(wheel, index) {
    this.setState({
      currentWheel: wheel,
      currentIndex: index
    });
  }

  removeAllWheels() {
    WheelDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentWheel: null,
      currentIndex: -1
    });

    WheelDataService.findByTitle(this.state.searchName)
      .then(response => {
        this.setState({
          wheels: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, wheels, currentWheel, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Wheels List</h4>

          <ul className="list-group">
            {wheels &&
              wheels.map((wheel, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveWheel(wheel, index)}
                  key={index}
                >
                  {wheel.wheels_name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllWheels}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentWheel ? (
            <div>
              <h4>Wheel</h4>
              <div>
                <label>
                  <strong>Internal ID:</strong>
                </label>{" "}
                {currentWheel.id}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentWheel.wheels_name}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentWheel.wheels_price}
              </div>
              

              <Link
                to={"/wheels/" + currentWheel.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Wheel...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
