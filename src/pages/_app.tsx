import '../styles/globals.css';
import '../styles/Home.scss';

import type { AppProps } from 'next/app';
import PrivateRoute from '../components/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { InMemoryPeopleGateway } from '../domain/shared/InMemoryGateway';

export const inMemoryPeopleGateway = new InMemoryPeopleGateway();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PrivateRoute>{<Component {...pageProps} />}</PrivateRoute>
    </Provider>
  );
}

export default MyApp;
