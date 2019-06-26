import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGOUT } from '../constants/actionTypes'

export default function (state = null, action) {
  switch (action.type) {
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
