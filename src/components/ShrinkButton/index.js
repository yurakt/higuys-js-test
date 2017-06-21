import React from 'react'
import './style.css'

const ShrinkButton = ({ onClick }) => {
  return (
    <div className='ShrinkButton' onClick={onClick}>

      <div><h2>^</h2></div>
      <div><h2>^</h2></div>
    </div>
  )
}

//todo: PropTypes

export default ShrinkButton