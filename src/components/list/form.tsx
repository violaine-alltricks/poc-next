import { Input } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { People } from '../../domain/People';

import styles from './form.module.css';

type FormProps = {
  mode: 'edit' | 'add';
  onSubmit: (item: string) => void;
  item?: People;
};

const Form: React.FC<FormProps> = ({ mode, item, onSubmit }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (item) {
      setValue(item.name);
    }
  }, [item]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit(value);
    },
    [value]
  );

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Form {mode}:</label>
        <Input type="text" value={value} onChange={onChange} />
      </form>
    </>
  );
};

export default Form;
