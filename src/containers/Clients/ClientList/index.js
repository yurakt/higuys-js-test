import React from 'react'
import { observer } from 'mobx-react'

import Client from '../Client'
import Header from './ClientsListHeader'

@observer
class ClientList extends React.Component {

  render() {
    const { list, edit, remove } = this.props.store
    const clients = (list.length > 0) ? list.map((client, i) => {
      return <Client key={i} {...{ client, edit, remove }}/>
    }) : <div className='ClientListEmpty'>Клиентов нет</div>

    return (
      <div>
        <Header/>
        <div className='ClientList'>
          {clients}
        </div>
      </div>
    )
  }
}

//todo: PropTypes

export default ClientList