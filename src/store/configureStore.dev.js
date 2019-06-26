import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger' // eslint-disable-line
import invariant from 'redux-immutable-state-invariant' 
import reducers from '../reducers'


const configureStore = preloadedState => {
  let composeEnhancers
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(invariant(), createLogger()))
  )

  return store
}

export default configureStore
