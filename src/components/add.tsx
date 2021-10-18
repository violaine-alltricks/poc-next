import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import Link from 'next/link';

type AddProps = {
  status: 'open' | 'close';
};

const Add: React.FC<AddProps> = ({ status }) => (
  <div className={styles[status]}>
    <Link href="/list">
      <a>
        <Button type="danger">X</Button>
      </a>
    </Link>

    <Form mode="add" />
  </div>
);

export default Add;
