import { FC, useState } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';

const Calls: FC = (): JSX.Element => {
  const [interval, setInterval] = useState<string>('threeDays');
  const [filter, setFilter] = useState<string>('allTypes');

  return (
    <main className={style.calls__wrapper}>
      <Header getInterval={setInterval} getFilter={setFilter} />
      <Table interval={interval} filter={filter} />
    </main>
  );
};

export default Calls;
