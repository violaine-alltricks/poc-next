import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Add from '../../components/add';
import Edit from '../../components/edit';

import Layout from '../../components/Layout';
import ListLayout, { useListContext } from '../../components/listLayout';
import { Page } from '../../types';

const List: Page = () => {
  const router = useRouter();
  const { sw, panel } = useListContext();

  return (
    <Layout>
      <Add status={panel === 'add' ? 'open' : 'close'} />
      <Edit
        status={panel === 'edit' ? 'open' : 'close'}
        item={sw.find((e) => e.name === router.query.slug?.[1])}
      />

      <Link href="/list/add">
        <a>
          <Button type="primary">Show add</Button>
        </a>
      </Link>

      <div>List Page</div>

      <ul>
        {sw.map((e) => (
          <li key={e.name}>
            <Link href={`/list/edit/${e.name}`}>
              <a>
                <Button type="primary">Edit</Button>
              </a>
            </Link>
            {e.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

List.getLayout = function getLayout(page) {
  return <ListLayout>{page}</ListLayout>;
};

export default List;
