import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions';
import { AppState } from '../redux/store';

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

  const onClick = () => {
    dispatch(loginRequest());
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, []);

  return <Button onClick={onClick}>Log me in</Button>;
};

export default Login;
