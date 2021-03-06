import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from '../components/Layout';

import { Button, Alert } from 'antd';
import { LoaderProps } from 'react-components/dist/components/widget/Loader';

const Loader = dynamic<LoaderProps>(
  () => import('react-components').then((modules) => modules.Loader),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const [greetings, setGreetings] = useState(false);

  return (
    <Layout>
      <h1 className="orange">Home</h1>

      <Loader />

      {greetings && <h2>Hello you!</h2>}

      <Alert message="toto" />
      <Button type="primary">Click me</Button>
    </Layout>
  );
};

export default Home;
