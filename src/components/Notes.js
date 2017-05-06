import React, { Component } from 'react'

class Notes extends Component {
  // const potato = 'potato'
  // const getDate = () => {
  //   const today = new Date()
  //   const dd = today.getDate()
  //   const mm = today.getMonth()+1 //January is 0!
  //   const yyyy = today.getFullYear()
  //
  //   if (dd < 10) {
  //     dd = '0' + dd
  //    }
  //
  //   if (mm < 10) {
  //     mm = '0' + mm
  //    }
  //
  //   return today = mm + '/' +dd + '/' + yyyy
  // }

  render () {
    return (
      <div className='notes-component'>
        <h2>Notes component</h2>
        <p>I'm the Notes component.</p>
      </div>
    )
  }
}

export default Notes
