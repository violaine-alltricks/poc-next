import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils';

// https://jasonwatmore.com/post/2021/08/30/next-js-redirect-to-login-page-if-unauthenticated
const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authCheck = (url: string) => {
    const path = url.split('?')[0];

    if (!isAuthenticated() && path !== '/login') {
      setAuthorized(false);

      router.push('/login');
    } else {
      setAuthorized(true);
    }
  };

  return <>{authorized && children}</>;
};

export default PrivateRoute;
