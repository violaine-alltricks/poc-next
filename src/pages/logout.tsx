import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { logout } from '../utils';
import { NextPage } from 'next';

const Logout: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    logout();

    router.push('/');
  }, []);

  return null;
};

export default Logout;
