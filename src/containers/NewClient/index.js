import React from 'react'
import { observer } from 'mobx-react'

import Button from 'components/Button'
import Input from 'components/Input'
import ShrinkButton from 'components/ShrinkButton'

import './style.css'

@observer
class NewClient extends React.Component {

  save = () => {
    this.props.store.add()
  }

  open = () => {
    this.props.store.create()
  }

  close = () => {
    this.props.store.destroy()
  }

  render() {
    const { client } = this.props.store

    return (
      <div className='NewClient'>
        <div className={!client ? 'NewClientHeader' : ''} onClick={this.open}>
          <h4>
            <span><i className='icon fa fa-plus-circle fa-2x' aria-hidden='true'></i></span>
            Добавить клиента
          </h4>
        </div>
        {client
          ? <div>
            <Input label={'Имя'} value={client.name} onChange={(value) => client.name = value}/>
            <Input label={'Телефон'} value={client.phone} onChange={(value) => client.phone = value}/>
            <Input label={'E-mail'} value={client.email} onChange={(value) => client.email = value}/>
            <Button name='Сохранить' onClick={this.save}/>
            <ShrinkButton onClick={this.close}/>
          </div>
          : null}
      </div>
    )
  }
}
export default NewClient