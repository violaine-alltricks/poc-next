import { AnyAction } from 'redux';
import { People } from '../domain/People';

export type ListState = {
  list: People[];
  loading: boolean;
  error: string | null;
};

const initState = {
  list: [],
  loading: false,
  error: null,
};

export const listReducer = (state: ListState = initState, action: AnyAction) => {
  switch (action.type) {
    case 'LIST_FETCH_REQUESTED':
      return {
        ...state,
        loading: true,
      };

    case 'LIST_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload,
      };

    case 'LIST_FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case 'EDIT_ITEM_SUCCESS':
      const idx = state.list.findIndex((i) => i.id === action.payload.id);

      if (idx < 0) {
        return state;
      }

      return {
        ...state,
        list: [...state.list.slice(0, idx), action.payload, ...state.list.slice(idx + 1)],
      };

    case 'DELETE_ITEM_SUCCESS':
      const index = state.list.findIndex((i) => i.id === action.payload);

      if (index < 0) {
        return state;
      }

      return {
        ...state,
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)],
      };

    default:
      return state;
  }
};
