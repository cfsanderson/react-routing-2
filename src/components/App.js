import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Apps from './Apps'

class App extends Component {
  render () {
    return (
      <div>
        <Apps />
      </div>
    )
  }
}

export default App
