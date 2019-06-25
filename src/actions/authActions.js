import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGOUT } from '../constants/actionTypes'

export function loginSuccededAction(authObject) {
  return {
    type: LOGIN_SUCCEDED,
    payload: authObject
  }
}

export function loginFailedAction() {
  return {
    type: LOGIN_FAILED
  }
}

export function logoutAction(store) {
  return {
    type: LOGOUT,
    payload: {
      store
    }
  }
}
