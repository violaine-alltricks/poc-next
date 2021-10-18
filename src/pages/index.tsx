import { Button } from 'antd';
import type { NextPage } from 'next';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="orange">Home</h1>

      <Button type="primary">Click me</Button>
    </Layout>
  );
};

export default Home;
