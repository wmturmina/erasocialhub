import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger' // eslint-disable-line
import invariant from 'redux-immutable-state-invariant' // eslint-disable-line
import rootSaga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = preloadedState => {
  let composeEnhancers
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(invariant(), sagaMiddleware, createLogger()))
  )
  sagaMiddleware.run(rootSaga)

  // Enable persistence
  persistStore(store)

  return store
}

export default configureStore
