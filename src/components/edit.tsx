import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import Link from 'next/link';

type EditProps = {
  status: 'open' | 'close';
  item: Record<string, string>;
};

const Edit: React.FC<EditProps> = ({ status, item }) => (
  <div className={styles[status]}>
    <Link href="/list">
      <a>
        <Button type="danger">X</Button>
      </a>
    </Link>

    <Form mode="edit" item={item} />
  </div>
);

export default Edit;
