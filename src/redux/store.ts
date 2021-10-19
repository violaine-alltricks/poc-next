import { all } from '@redux-saga/core/effects';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { authReducer, AuthState } from './authReducer';
import { AuthSaga } from './authSaga';
import { listReducer, ListState } from './listReducer';
import { ListSaga } from './listSaga';

function* rootSaga() {
  yield all([...AuthSaga, ...ListSaga]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  list: listReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type AppStore = typeof store;
export type AppState = {
  list: ListState;
  auth: AuthState;
};

sagaMiddleware.run(rootSaga);

export default store;
