import React from 'react'
import { observer } from 'mobx-react'

import Client from '../Client'

@observer
const ClientList = ({ store }) => {
  const clients = store.clients.map((client, i) => {
    return <Client key={i} {...{ client }}/>
  })
  return (
    <div>
      {clients}
    </div>
  )
}

//todo: PropTypes

export default ClientList