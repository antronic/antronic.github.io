import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@ducks'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const AppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppComponent/>, document.getElementById('root'))

serviceWorker.register()
