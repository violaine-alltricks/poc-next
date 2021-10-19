import { AnyAction } from 'redux';

export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
};

const initState = {
  isAuthenticated: false,
  loading: false,
};

export const authReducer = (state: AuthState = initState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };

    case 'SET_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
