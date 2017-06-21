import React from 'react'

import Button from 'components/Button'
import Input from 'components/Input'
import ShrinkButton from 'components/ShrinkButton'

import './style.css'

const save = () => {
  alert('saved')
}

const open = () => {
  alert('opened')
}

const close = () => {
  alert('closed')
}

const NewClient = () => {
  return (
    <div className='NewClient'>
      <h2>+ Добавить клиента</h2>
      <Input label={'Имя'}/>
      <Input label={'Телефон'}/>
      <Input label={'E-mail'}/>
      <Button name='Сохранить' onClick={save}/>
      <ShrinkButton onClick={close}/>
    </div>
  )
}

export default NewClient