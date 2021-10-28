import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

const SW: React.FC = () => {
  const [people, setPeople] = useState<{ name: string }>();
  const { query } = useRouter();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${query.id}`)
      .then((res) => res.json())
      .then((body) => setPeople(body));
  }, []);

  return <Layout>{people?.name}</Layout>;
};

export default SW;
