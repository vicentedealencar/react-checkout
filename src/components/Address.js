import React from 'react'

export class Address extends React.Component {
  render() {
    const {
      onClick,
      id,
      name,
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
      country,
      zip
    } = this.props

    return <div onClick={() => onClick(id)} style={onClick && {cursor:'pointer'}} >
      <p>{id}</p>
      <p>{name}</p>
      <p>{street}</p>
      <p>{number}</p>
      <p>{complement}</p>
      <p>{neighbourhood}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{country}</p>
      <p>{zip}</p>
    </div>
  }
}

export class AddressList extends React.Component {
  render() {
    const {
      addresses,
      onAdd,
      onSelectAddress
    } = this.props

    const list = addresses
    .map((x, i) => <Address {...x} onClick={onSelectAddress} key={i} />)

    return <div>
      {list}
      <button onClick={onAdd}>Add</button>
    </div>
  }
}

export default AddressList
