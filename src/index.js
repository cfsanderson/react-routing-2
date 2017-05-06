import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import Layout from './components/Layout'

import './styles/screen.scss'

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>
      {app}
    </AppContainer>,
    document.getElementById('root')
  )
}

render(<Layout />)

if (module.hot) {
  module.hot.accept('./components/Layout', () => {
    const NextApp = require('./components/Layout').default
    render(<NextApp />)
  })
}
