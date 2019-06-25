import _ from 'lodash'
import { fork, all } from 'redux-saga/effects'
import i18nSaga from './i18nSaga'

export default function* root() {
  yield all(_.map([
    i18nSaga
  ], fork))
}
