import React from 'react'

import Field from './Field'
import './style.css'

export default class Client extends React.Component {

  render() {

    const { client, edit, remove } = this.props

    return (
      <div className='Client'>
        <div>
          <span className='button' onClick={() => edit(client)}>
            <i className='fa fa-pencil' aria-hidden='true'></i>
          </span>
          <span className='button remove' onClick={() => remove(client.id)}>
            ✖
          </span>
        </div>
        <Field value={client.name}/>
        <Field value={client.phone}/>
        <Field value={client.email}/>
        <Field value={client.lastVisit}/>
        <Field value={client.paymentSum}/>
        <Field value={client.visitsAmount}/>
        <Field value={client.subscription}/>
      </div>
    )
  }
}