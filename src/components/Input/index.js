import React from 'react'
import './style.css'

const Input = ({ className, label, value, onChange }) => {

  const classes = className + ' Input'

  return (
    <div className={classes}>
      <label>{label}</label>
      <br/>
      <input
        type='text'
        name=''
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

//todo: PropTypes

export default Input