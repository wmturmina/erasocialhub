import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  // Enable persistence
  persistStore(store)

  return store
}

export default configureStore
