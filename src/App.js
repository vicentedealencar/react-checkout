import React, { Component } from 'react';
import { createStore } from 'redux'
import logo from './logo.svg';
import CheckoutContainer from './CheckoutContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <CheckoutContainer />
        </div>
      </div>
    );
  }
}

export default App;
