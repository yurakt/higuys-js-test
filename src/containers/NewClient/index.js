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
            <div className='NewClientForm'>
              <div className='row'>
                <Input className='col fl-3' label={'Имя'} value={client.name} onChange={(value) => client.name = value}/>
                <Input className='col fl-2' label={'Телефон'} value={client.phone}
                       onChange={(value) => client.phone = value}/>
              </div>
              <div className='row'>
                <Input className='col fl-3' label={'E-mail'} value={client.email}
                       onChange={(value) => client.email = value}/>
                <div className='col fl-2'>
                  <Button name='Сохранить' onClick={this.save}/>
                </div>
              </div>
            </div>
            <ShrinkButton onClick={this.close}/>
          </div>
          : null}
      </div>
    )
  }
}
export default NewClient