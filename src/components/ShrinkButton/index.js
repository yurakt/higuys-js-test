import React from 'react'
import './style.css'

const ShrinkButton = ({ onClick }) => {
  return (
    <div className='ShrinkButton' onClick={onClick}>

      <div><i className='fa fa-chevron-up fa-lg' aria-hidden='true'></i></div>
      <div><i className='fa fa-chevron-up fa-lg' aria-hidden='true'></i></div>
    </div>
  )
}

//todo: PropTypes

export default ShrinkButton