import React from 'react'
import './style.css'

const Input = ({ label }) => {
  return (
    <div className='Input'>
      <label>{label}</label>
      <br/>
      <input type='text' name=''/>
    </div>
  )
}

//todo: PropTypes

export default Input