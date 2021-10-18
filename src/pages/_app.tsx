import '../styles/globals.css';
import '../styles/Home.scss';

import type { AppProps } from 'next/app';
import PrivateRoute from '../components/PrivateRoute';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivateRoute>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}
export default MyApp;
