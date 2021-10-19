import { People } from '../domain/People';

export const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' });
export const logoutRequest = () => ({ type: 'LOGOUT_REQUEST' });
export const logoutSuccess = () => ({ type: 'LOGOUT_SUCCESS' });

export const setAuthenticated = (isAuth: boolean) => ({
  type: 'SET_AUTHENTICATED',
  payload: isAuth,
});

export const listFetchRequested = () => ({ type: 'LIST_FETCH_REQUESTED' });
export const listFetchSuccess = (items: People[]) => ({
  type: 'LIST_FETCH_SUCCESS',
  payload: items,
});
export const listFetchError = (error: string) => ({ type: 'LIST_FETCH_ERROR', payload: error });

export const addItemRequest = (item: Omit<People, 'id'>) => ({
  type: 'ADD_ITEM_REQUEST',
  payload: item,
});

export const addItemSuccess = (item: People) => ({
  type: 'ADD_ITEM_SUCCESS',
  payload: item,
});

export const editItemRequest = (item: People) => ({
  type: 'EDIT_ITEM_REQUEST',
  payload: item,
});

export const editItemSuccess = (item: People) => ({
  type: 'EDIT_ITEM_SUCCESS',
  payload: item,
});

export const deleteItemRequest = (id: string) => ({
  type: 'DELETE_ITEM_REQUEST',
  payload: id,
});

export const deleteItemSuccess = (id: string) => ({
  type: 'DELETE_ITEM_SUCCESS',
  payload: id,
});
