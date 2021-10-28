import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemRequest } from '../../redux/actions';

type AddProps = {
  status: 'open' | 'close';
};

const Add: React.FC<AddProps> = ({ status }) => {
  const dispatch = useDispatch();

  const onSubmit = (name: string) => {
    dispatch(addItemRequest({ name }));
  };

  return (
    <div className={styles[status]}>
      <Form mode="add" onSubmit={onSubmit} />

      <Link to="/list">
        <Button type="default" danger>
          X
        </Button>
      </Link>
    </div>
  );
};

export default Add;
