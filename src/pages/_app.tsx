import '../styles/globals.css';
import '../styles/Home.scss';

import type { AppProps } from 'next/app';
import PrivateRoute from '../components/PrivateRoute';
import { Page } from '../types';

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);

  return <PrivateRoute>{getLayout(<Component {...pageProps} />)}</PrivateRoute>;
}
export default MyApp;
