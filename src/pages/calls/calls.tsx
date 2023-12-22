import { FC } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';

const Calls: FC = (): JSX.Element => {
  return (
    <main className={style.calls__wrapper}>
      <Header />
      <Table />
    </main>
  );
};

export default Calls;
