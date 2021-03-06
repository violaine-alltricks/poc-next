import { call, put, takeLatest } from '@redux-saga/core/effects';
import Router from 'next/router';
import { People } from '../domain/People';
import { inMemoryPeopleGateway } from '../pages/_app';
import {
  addItemSuccess,
  deleteItemSuccess,
  editItemSuccess,
  listFetchError,
  listFetchSuccess,
} from './actions';

function* fetchList() {
  try {
    const peoples: People[] = yield call(
      inMemoryPeopleGateway.fetchPeoples.bind(inMemoryPeopleGateway)
    );

    yield put(listFetchSuccess(peoples));
  } catch (e: any) {
    console.log(e);
    yield put(listFetchError(e.toString()));
  }
}

function* addItem({ type, payload }: { type: 'ADD_ITEM_REQUEST'; payload: Omit<People, 'id'> }) {
  try {
    const people: People = yield call(
      inMemoryPeopleGateway.addPeople.bind(inMemoryPeopleGateway),
      payload
    );
    yield put(addItemSuccess(people));

    Router.push('/list');
  } catch (e) {
    console.log(e);
  }
}

function* editItem({ type, payload }: { type: 'EDIT_ITEM_REQUEST'; payload: People }) {
  try {
    const people: People = yield call(
      inMemoryPeopleGateway.editPeople.bind(inMemoryPeopleGateway),
      payload
    );

    yield put(editItemSuccess(people));

    Router.push('/list');
  } catch (e) {
    console.log(e);
  }
}

function* deleteItem({ type, payload }: { type: 'DELETE_ITEM_REQUEST'; payload: string }) {
  try {
    yield call(inMemoryPeopleGateway.removePeople.bind(inMemoryPeopleGateway), payload);

    yield put(deleteItemSuccess(payload));

    Router.push('/list');
  } catch (e) {
    console.log(e);
  }
}

export const ListSaga = [
  takeLatest('LIST_FETCH_REQUESTED', fetchList),
  takeLatest('ADD_ITEM_REQUEST', addItem),
  takeLatest('EDIT_ITEM_REQUEST', editItem),
  takeLatest('DELETE_ITEM_REQUEST', deleteItem),
];
