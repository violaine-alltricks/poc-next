import { Button } from 'antd';

import Add from './add';
import Edit from './edit';

import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteItemRequest, listFetchRequested } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

import styles from './listLayout.module.css';
import { People } from '../../domain/People';

type ListLayoutProps = {
  panel?: string;
};

const ListLayout: React.FC<ListLayoutProps> = ({ panel }) => {
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = useState('close');
  const dispatch = useDispatch();
  const peoples = useSelector((state: AppState) => state.list.list);

  const item: People | undefined = useMemo(() => {
    const idx = peoples.findIndex(
      (e) => e.id === location.pathname.split('/')[location.pathname.split('/').length - 1]
    );

    return peoples[idx];
  }, [peoples]);

  useEffect(() => {
    setCurrentPanel(panel ?? 'close');
  }, [panel]);

  useEffect(() => {
    dispatch(listFetchRequested());
  }, []);

  return (
    <>
      <Add status={currentPanel === 'add' ? 'open' : 'close'} />
      <Edit status={currentPanel === 'edit' ? 'open' : 'close'} item={item} />

      <Link to="/list/add">
        <Button type="primary">Show add</Button>
      </Link>

      <div>List Page</div>

      <ul className={styles.list}>
        {peoples.map((e) => (
          <li key={e.id} className={styles.listItem}>
            <Link to={`/list/edit/${e.id}`}>
              <Button type="primary">Edit</Button>
            </Link>
            <span className={styles.people}>{e.name}</span>
            <Button type="default" danger onClick={() => dispatch(deleteItemRequest(e.id))}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListLayout;
