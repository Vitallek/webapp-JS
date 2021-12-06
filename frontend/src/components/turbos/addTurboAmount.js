import React from 'react';
import axios from 'axios';

export default class AddTurboAmount extends React.Component {
  state = {
    howMany: 0,
    id: 0,
  }

  handleChangeHowMany = event => {
    this.setState({ howMany: event.target.value });
  }
  handleChangeid = event => {
    this.setState({ id: event.target.value });
  }
  

  handleSubmit = event => {
    event.preventDefault();

    const engine = {
      howMany: this.state.howMany,
      id: this.state.id,
    };

    axios.put('http://localhost:5000/turbos/add', engine)
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
            Add amount:
            <input onChange={this.handleChangeHowMany} className="form-control" type="number" name="howMany" placeholder="Enter amount" maxLength="30" required/>
          </label>
          <label className="form-outline mb-4">
            to ID :
            <input onChange={this.handleChangeid} className="form-control" type="number" name="id" placeholder="Enter id" maxLength="10" required/>
          </label>
          <button type="submit" className="btn btn-success">Add to Warehouse</button>
        </form>
      </div>
    );
  }
}
