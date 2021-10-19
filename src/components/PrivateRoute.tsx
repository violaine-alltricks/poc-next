import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../redux/actions';
import { AppState } from '../redux/store';
import { isAuthenticated } from '../utils';

// https://jasonwatmore.com/post/2021/08/30/next-js-redirect-to-login-page-if-unauthenticated
const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);

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
  }, [isAuth]);

  const authCheck = (url: string) => {
    const path = url.split('?')[0];

    if (!isAuthenticated() && path !== '/login') {
      setAuthorized(false);

      router.push('/login');
    } else {
      if (isAuthenticated() && !isAuth) {
        dispatch(setAuthenticated(true));
      }

      setAuthorized(true);
    }
  };

  return <>{authorized && children}</>;
};

export default PrivateRoute;
