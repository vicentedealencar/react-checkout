import React from 'react'
import {connect} from 'react-redux'
import {Address, AddressList} from './components/Address';
import {mapState, mapDispatch} from './reducers';

class CheckoutContainer extends React.Component {
  render() {
    return <div>
      <Address {...this.props.selectedAddress} />
      <hr />
      <AddressList addresses={this.props.addressList}
        onAdd={this.props.onAddAddress} 
        onSelectAddress={this.props.onSelectAddress} />
    </div>
  }
}

export default connect(mapState, mapDispatch)(CheckoutContainer);
 