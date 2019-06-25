import { REHYDRATE } from 'redux-persist'
import _ from 'lodash'
import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGOUT } from '../constants/actionTypes'

export default function (state = null, action) {
  switch (action.type) {
  case REHYDRATE:
    {
      const incoming = _.get(action.payload, 'auth')
      if (incoming) {
        return { ...state, ...incoming }
      }
    }
    return state
  case LOGIN_SUCCEDED:
    return action.payload
  case LOGIN_FAILED:
    return null
  case LOGOUT:
    return null
  default:
  }

  return state
}
