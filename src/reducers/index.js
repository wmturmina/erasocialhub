import { persistCombineReducers } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import authReducer from './authReducer'

const rootReducer = persistCombineReducers(
  {
    key: 'primary',
    storage: sessionStorage
  },
  {
    auth: authReducer
  }
)

export default rootReducer
