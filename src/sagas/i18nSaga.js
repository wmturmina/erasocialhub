import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
import _ from 'lodash'
import { I18N_LOADED, I18N_FETCH_SUCCEEDED, I18N_FETCH_FAILED, LANGUAGE_CHANGED } from '../constants/actionTypes'

// until we implemente the Currencies to the stores in the API
const tempCurrencies = {
  en_US: 'USD',
  pt_BR: 'BRL'
}

function* fetchI18N(action) {
  try {
    const language = action.payload.language
    let fallbackMessages = {}
    if (_.includes(language, '_')) {
      const splittedLanguage = _.split(language, '_')
      try {
        const res = yield call(axios.get, `translations/${splittedLanguage[0]}.json`)
        fallbackMessages = res.data
      } catch (e) {
        console.warn(`Fallback language not found ${splittedLanguage[0]}.json`)
      }
    }
    const i18n = yield call(axios.get, `translations/${_.split(language, '_')[0]}.json`)
    yield put({
      type: I18N_FETCH_SUCCEEDED,
      payload: {
        messages: { ...fallbackMessages, ...i18n.data },
        language: _.split(language, '_')[0],
        // currency: action.payload.currencyCode || 'BRL'
        currency: tempCurrencies[action.payload.language] || 'BRL'
      }
    })
    // Dispatch the "loaded" action after a short delay. This is to ensure that the
    // intl-react provider has updated its internal dictionary
    // yield call(delay, 200)
    yield put({ type: I18N_LOADED })
  } catch (e) {
    yield put({ type: I18N_FETCH_FAILED, payload: { message: e.message } })
  }
}

function* i18nSaga() {
  yield takeLatest(LANGUAGE_CHANGED, fetchI18N)
}

export default i18nSaga
