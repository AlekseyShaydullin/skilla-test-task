import { FC, useState } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';

const Calls: FC = (): JSX.Element => {
  const [interval, setInterval] = useState<string>('threeDays');

  return (
    <main className={style.calls__wrapper}>
      <Header getInterval={setInterval} />
      <Table interval={interval} />
    </main>
  );
};

export default Calls;
