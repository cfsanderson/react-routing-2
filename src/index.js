import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import App from './components/App'

import './styles/screen.scss'

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>
      {app}
    </AppContainer>,
    document.getElementById('root')
  )
}

render(<App />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
