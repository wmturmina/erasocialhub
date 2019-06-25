import { persistCombineReducers } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import authReducer from './authReducer'
import localeReducer from './localeReducer'

const rootReducer = persistCombineReducers(
  {
    key: 'primary',
    storage: sessionStorage
  },
  {
    auth: authReducer,
    locale: localeReducer
  }
)

export default rootReducer
