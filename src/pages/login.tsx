import Router, { useRouter } from 'next/router';
import { Button } from 'antd';
import { useEffect } from 'react';
import { isAuthenticated } from '../utils';
import { NextPage } from 'next';

const Login: NextPage = () => {
  const router = useRouter();

  const onClick = () => {
    window.localStorage.setItem('token', 'token');

    console.log('auth');
    Router.push('/');
  };

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/');
    }
  }, []);

  return <Button onClick={onClick}>Log me in</Button>;
};

export default Login;
