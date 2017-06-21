import React from 'react'

const Field = ({ value }) => {
  return (
    <div className='fl-1'>
      {value ? value : '------'}
    </div>
  )
}

export default Field