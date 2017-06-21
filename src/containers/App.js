import React from 'react'
import './App.css'

import Header from './Header'
import NewClient from './NewClient'
import Clients from './Clients'

import store from 'stores/clientStore.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <NewClient {...{ store }}/>
        <Clients {...{ store }}/>
      </div>
    )
  }
}

export default App
