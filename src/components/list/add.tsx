import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { useRouter } from 'next/router';
import { Link } from 'react-router-dom';

type AddProps = {
  status: 'open' | 'close';
};

const Add: React.FC<AddProps> = ({ status }) => {
  const router = useRouter();

  return (
    <div className={styles[status]}>
      <Link to="/list">
        <Button type="danger">X</Button>
      </Link>

      <Form mode="add" />
    </div>
  );
};

export default Add;
