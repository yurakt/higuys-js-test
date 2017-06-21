import React from 'react'

const Field = ({ value }) => {
  return (
    <div>
      {value ? value : '------'}
    </div>
  )
}

export default Field