import Router from 'next/router';

import { takeLatest, put } from 'redux-saga/effects';
import { loginSuccess, logoutSuccess } from './actions';

function* login() {
  try {
    const token = 'token';

    window.localStorage.setItem('token', token);

    yield put(loginSuccess());

    Router.push('/');
  } catch (e) {
    console.log(e);
  }
}

function* logout() {
  window.localStorage.removeItem('token');

  yield put(logoutSuccess());

  Router.push('/login');
}

export const AuthSaga = [takeLatest('LOGIN_REQUEST', login), takeLatest('LOGOUT_REQUEST', logout)];
