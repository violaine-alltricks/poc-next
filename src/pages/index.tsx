import { Button } from 'antd';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Button type="primary">Click me</Button>

      <div className="orange" />
      <div className="red" />
    </div>
  );
};

export default Home;
