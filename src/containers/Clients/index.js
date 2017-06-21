import React from 'react'

import ClientList from 'ClientList'

const Clients = ({ store }) => {
  return (
    <div>
      <h2>Клиенты</h2>
      <ClientList {...{ store }}/>
    </div>
  )
}

export default Clients