import React from 'react'
import './style.css'

const Button = ({ name, onClick }) => {
  return (
    <button className='Button' onClick={onClick}>
      {name}
    </button>
  )
}

//todo: PropTypes

export default Button