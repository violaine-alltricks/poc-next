import { Button } from 'antd';

import { useRouter } from 'next/router';
import Add from '../../components/add';
import Edit from '../../components/edit';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const List: React.FC = () => {
  const router = useRouter();
  const [asFetch, setAsFetch] = useState(false);
  const [panel, setPanel] = useState('close');
  const [sw, setSw] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const p = router.query.mode ?? ('close' as string);

    setPanel(p as string);
  }, [router]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((body) => {
        setSw(body.results);
        setAsFetch(true);
      });
  }, []);

  return (
    <>
      <Add status={panel === 'add' ? 'open' : 'close'} />
      <Edit
        status={panel === 'edit' ? 'open' : 'close'}
        item={sw.find((e) => e.name === router.query.slug?.[1])}
      />

      <Link href="/list?mode=add">
        <a>
          <Button type="primary">Show add</Button>
        </a>
      </Link>

      <div>List Page</div>

      <ul>
        {sw.map((e) => (
          <li key={e.name}>
            <Link href={`/list?mode=edit&id=${e.name}`}>
              <a>
                <Button type="primary">Edit</Button>
              </a>
            </Link>
            {e.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
