import { Button } from 'antd';

import { useRouter } from 'next/router';
import Add from '../../components/add';
import Edit from '../../components/edit';

import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

type ListProps = {
  sw: Record<string, string>[];
};

const List: React.FC<ListProps> = ({ sw }) => {
  const router = useRouter();
  const [panel, setPanel] = useState('close');

  useEffect(() => {
    const p = router.query.mode ?? ('close' as string);

    setPanel(p as string);
  }, [router]);

  return (
    <>
      <Add status={panel === 'add' ? 'open' : 'close'} />
      <Edit
        status={panel === 'edit' ? 'open' : 'close'}
        item={sw.find((e) => e.name === router.query.id) ?? {}}
      />

      <Button
        type="primary"
        onClick={() => router.push('/list?mode=add', '/list?mode=add', { shallow: true })}
      >
        Show add
      </Button>

      <div>List Page</div>

      <ul>
        {sw.map((e) => (
          <li key={e.name}>
            <Button
              type="primary"
              onClick={() =>
                router.push(`/list?mode=edit&id=${e.name}`, `/list?mode=edit&id=${e.name}`, {
                  shallow: true,
                })
              }
            >
              Edit
            </Button>
            {e.name}
          </li>
        ))}
      </ul>
    </>
  );
};

// Because authentication check is done on client-side, this is trigger even is the user is not authenticated.
// Is it possible to check for user authentication on the server?
export const getServerSideProps: GetServerSideProps = async () => {
  // Maybe this works here because the request is not authenticated. Need to check how to access authentication on server side.
  const res = await fetch('https://swapi.dev/api/people');
  const body = await res.json();

  return {
    props: {
      sw: body.results,
    },
  };
};

export default List;
