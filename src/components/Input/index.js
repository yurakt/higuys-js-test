import React from 'react'
import './style.css'

const Input = ({ label, value, onChange }) => {
  return (
    <div className='Input'>
      <label>{label}</label>
      <br/>
      <input
        type='text'
        name=''
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }
        }/>
    </div>
  )
}

//todo: PropTypes

export default Input