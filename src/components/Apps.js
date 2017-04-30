import React, { Component } from 'react'
import Notes from './Notes'
import Part01 from './Part01'

class Apps extends Component {
  render () {
    return (
      <div>
        <h1>Collection (Apps)</h1>
        <Notes />
        <Part01 />
      </div>
    )
  }
}

export default Apps
