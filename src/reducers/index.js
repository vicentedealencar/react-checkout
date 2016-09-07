import { combineReducers, bindActionCreators } from 'redux'
 
const actionTypes = {
  ADDED_ADDRESS: 'ADDED_ADDRESS',
  SELECTED_ADDRESS: 'SELECTED_ADDRESS',
}

const onAddAddress = address => ({
  type: 'ADDED_ADDRESS',
  payload: {
    address
  }
})

const onSelectAddress = id => ({
  type: 'SELECTED_ADDRESS',
  payload: {
    id
  }
})

const reduceSelected = (state, id) => {
  return {
    ...state,
    selectedAddress: state.addressList.filter(x => x.id === id)[0]
  }
}

const reduceAdd = (state) => {
  return {
    ...state,
    addressList: [
      ...state.addressList,
      {
        ...state.selectedAddress,
        id: Math.random()
      }
    ]}
}

const initialState = {
  addressList: [],
  selectedAddress: {
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
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDED_ADDRESS:
      return reduceAdd(state, action.payload.address)
    case actionTypes.SELECTED_ADDRESS:
      return reduceSelected(state, action.payload.id)
    default:
      return state
  }
}


export const mapState = state => ({
  addressList: state.address.addressList,
  selectedAddress: state.address.selectedAddress,
})

export const mapDispatch = dispatch => bindActionCreators({onAddAddress, onSelectAddress}, dispatch)

export default combineReducers({
  address
})