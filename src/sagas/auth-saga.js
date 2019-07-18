import { call, select, put } from 'redux-saga/effects'
// import { apiAuth } from '../api/api-auth'
import { setAccessToken } from '../api/api'
import { updatedAuth } from '../actions/actions-auth'

export function * requestUpdateAuth (action) {
  try {
    const state = yield select()
    const { auth } = state
    // Check if auth data exist. If yes refresh the auth data.
    if (auth) {
      yield put(updatedAuth(auth))
      setAccessToken(auth.access_token)
    } else {
      // Otherwise, get the auth data from the action (new app installed).
      const { auth } = action
      yield put(updatedAuth(auth))
      setAccessToken(auth.access_token)
    }

    // const profile = yield call(apiUser.getUserDetail, action.auth.user._id)
    // console.log('profile: ', profile)
    // if (!profile.error) {
    //   yield put(saveUserData(profile))
    // }
  } catch (e) {
    console.log(e)
  }
}
