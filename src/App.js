import React, { Component } from 'react';
import logo from './logo.svg';
import {Address, AddressList} from './components/Address';
import './App.css';

const reduceSelected = (state, id) => {
  return {
    // ...state,
    selectedAddress: state.addressList.filter(x => x.id === id)[0]
  }
}

const reduceAdd = (state) => {
  return {
    addressList: [
      ...state.addressList,
      {
        ...state.selectedAddress,
        id: Math.random()
      }
    ]}
}

class App extends Component {
  constructor(props) {
    super(props)
    const addressProps = {
      id: Math.random(),
      name: 'Fulano de Tal',
      street: 'Rua Visconde de pirajá',
      number: '123',
      complement: '321',
      neighbourhood: 'Ipanema',
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'Brazil',
      zip: '224410001'
    }

    this.state = {
      addressList: [addressProps],
      selectedAddress: addressProps
    }
  }

  render() {
    const onSelectAddress = id => this.setState(reduceSelected(this.state, id))

    const onAdd = x => this.setState(reduceAdd(this.state))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Address {...this.state.selectedAddress} />
          <hr />
          <AddressList addresses={this.state.addressList} onAdd={onAdd} onSelectAddress={onSelectAddress} />
        </div>
      </div>
    );
  }
}

export default App;
