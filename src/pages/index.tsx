import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from '../components/Layout';

import { Button, Alert } from 'antd';

const Home: NextPage = () => {
  const [greetings, setGreetings] = useState(false);

  return (
    <Layout>
      <h1 className="orange">Home</h1>

      {greetings && <h2>Hello you!</h2>}

      <Alert message="toto" />
      <Button type="primary">Click me</Button>
    </Layout>
  );
};

export default Home;
