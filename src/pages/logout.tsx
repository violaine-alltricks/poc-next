import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { logoutRequest } from '../redux/actions';

const Logout: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutRequest());
  }, []);

  return null;
};

export default Logout;
