import '../styles/globals.css';
import '../styles/Home.scss';

import 'react-components/reactComponent.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import PrivateRoute from '../components/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { InMemoryPeopleGateway } from '../domain/shared/InMemoryGateway';

export const inMemoryPeopleGateway = new InMemoryPeopleGateway();

const SafeHydrate: React.FC = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Provider store={store}>
        <PrivateRoute>{<Component {...pageProps} />}</PrivateRoute>
      </Provider>
    </SafeHydrate>
  );
}

export default MyApp;
