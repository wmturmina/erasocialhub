import { I18N_LOADED, I18N_FETCH_SUCCEEDED } from '../constants/actionTypes'

export default function (state = {}, action) {
  switch (action.type) {
  case I18N_FETCH_SUCCEEDED:
  {
    let l10n = {
      CURRENCY_CODE: action.payload.currency
    }
    // we need to put a $ sign in front of every translation
    const messages = action.payload.messages

    let formats = {
      number: {
        currency: {
          style: 'currency',
          currency: l10n.CURRENCY_CODE, // ISO 4217
          minimumFractionDigits: parseInt(l10n.CURRENCY_DECIMALS || '2', 10)
        }
      }
    }
    return {
      ...state,
      language: action.payload.language,
      messages,
      l10n,
      formats
    }
  }
  case I18N_LOADED:
    return { ...state, loaded: true }
  default:
  }

  return state
}
