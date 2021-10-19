import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { Link } from 'react-router-dom';

type EditProps = {
  status: 'open' | 'close';
  item: Record<string, string>;
};

const Edit: React.FC<EditProps> = ({ status, item }) => {
  return (
    <div className={styles[status]}>
      <Link to="/list">
        <Button type="danger">X</Button>
      </Link>

      <Form mode="edit" item={item} />
    </div>
  );
};

export default Edit;
