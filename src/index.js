import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { App } from './app'

axios.defaults.validateStatus = status => status < 500 && status !== 400

const container = document.querySelector('.container')

ReactDOM.render(<App />, container)
