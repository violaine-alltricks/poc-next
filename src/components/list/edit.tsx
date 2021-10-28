import { Button } from 'antd';
import styles from './add-edit.module.css';
import Form from './form';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editItemRequest } from '../../redux/actions';
import { People } from '../../domain/People';

type EditProps = {
  status: 'open' | 'close';
  item: People;
};

const Edit: React.FC<EditProps> = ({ status, item }) => {
  const dispatch = useDispatch();

  const onSubmit = (name: string) => {
    dispatch(editItemRequest({ ...item, name }));
  };

  return (
    <div className={`${styles[status]} ${styles.form}`}>
      <Form mode="edit" item={item} onSubmit={onSubmit} />

      <Link to="/list">
        <Button type="default" danger>
          X
        </Button>
      </Link>
    </div>
  );
};

export default Edit;
