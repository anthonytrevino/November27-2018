import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Interaction extends Component {

  render() {
    return (
      <div>
        {this.props.comments}
        {this.props.likes}
      </div>
    )
  }
}

export default Interaction;
