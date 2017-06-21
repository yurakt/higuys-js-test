import React from 'react'

import ClientList from './ClientList'

const Clients = ({ store }) => {
  return (
    <div>
      <ClientList {...{ store }}/>
    </div>
  )
}

export default Clients