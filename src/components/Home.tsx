import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from '../components/Layout';

import { Button } from 'react-components';
// import { Button } from 'antd'

const Home: NextPage = () => {
  const [greetings, setGreetings] = useState(false);

  return (
    <Layout>
      <h1 className="orange">Home</h1>

      {greetings && <h2>Hello you!</h2>}

      <Button type="default" onClick={() => setGreetings(true)}>
        Click me
      </Button>
    </Layout>
  );
};

export default Home;
