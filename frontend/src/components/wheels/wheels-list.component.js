import React from 'react';

import axios from 'axios';

const apiUrl = "http://localhost:5000/wheels";

export default class WheelList extends React.Component {
  state = {
    wheels: []
  }
  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const wheels = res.data;
        this.setState({ wheels });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        { this.state.wheels.map(Wheels => 
          <ul>
            <li key={Wheels.Id}>{Wheels.Id}</li>
            <li>{Wheels.wheels_name}</li>
            <li>{Wheels.wheels_price}</li>
          </ul>
          )}
      </div>
    )
  }
}