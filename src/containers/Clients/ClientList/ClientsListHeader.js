import React from 'react'

import clientFields from 'stores/clientFields'

import './style.css'

const Header = () => {

  let titles = Object.values(clientFields).map((item, i) => {
    return (
      <div className='fl-1' key={i}>{item}</div>
    )
  })

  titles = [<div className='firstCol' key={-1}></div>, ...titles]

  return (
    <div className='ClientListHeader'>
      {titles}
    </div>
  )
}

export default Header