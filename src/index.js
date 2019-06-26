import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { App } from './app'
import configureStore from './store/configureStore'

axios.defaults.validateStatus = status => status < 500 && status !== 400
const store = configureStore({})
const container = document.querySelector('.container')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , container
)
