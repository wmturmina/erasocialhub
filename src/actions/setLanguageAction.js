import { LANGUAGE_CHANGED } from '../constants/actionTypes'

export default function setLanguageAction(language) {
  return {
    type: LANGUAGE_CHANGED,
    payload: {
      language
    }
  }
}
