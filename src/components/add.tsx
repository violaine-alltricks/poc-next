import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { useRouter } from 'next/router';

type AddProps = {
  status: 'open' | 'close';
};

const Add: React.FC<AddProps> = ({ status }) => {
  const router = useRouter();

  return (
    <div className={styles[status]}>
      <Button type="danger" onClick={() => router.push('/list', '/list', { shallow: true })}>
        X
      </Button>

      <Form mode="add" />
    </div>
  );
};

export default Add;
