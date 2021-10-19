import { Button } from 'antd';

import Add from './add';
import Edit from './edit';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

type ListLayoutProps = {
  panel?: string;
};

const ListLayout: React.FC<ListLayoutProps> = ({ panel }) => {
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = useState('close');
  const [sw, setSw] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    setCurrentPanel(panel ?? 'close');
  }, [panel]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((body) => {
        setSw(body.results);
      });
  }, []);

  return (
    <>
      <Add status={currentPanel === 'add' ? 'open' : 'close'} />
      <Edit
        status={currentPanel === 'edit' ? 'open' : 'close'}
        item={
          sw.find(
            (e) => e.name === location.pathname.split('/')[location.pathname.split('/').length - 1]
          ) ?? {}
        }
      />

      <Link to="/list/add">
        <Button type="primary">Show add</Button>
      </Link>

      <div>List Page</div>

      <ul>
        {sw.map((e) => (
          <li key={e.name}>
            <Link to={`/list/edit/${e.name}`}>
              <Button type="primary">Edit</Button>
            </Link>
            {e.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListLayout;
