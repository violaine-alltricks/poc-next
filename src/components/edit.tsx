import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { useRouter } from 'next/router';

type EditProps = {
  status: 'open' | 'close';
  item: Record<string, string>;
};

const Edit: React.FC<EditProps> = ({ status, item }) => {
  const router = useRouter();

  return (
    <div className={styles[status]}>
      <Button type="danger" onClick={() => router.push('/list', '/list', { shallow: true })}>
        X
      </Button>

      <Form mode="edit" item={item} />
    </div>
  );
};

export default Edit;
