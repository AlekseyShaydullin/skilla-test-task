import { FC } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';

const Calls: FC = (): JSX.Element => {
  return (
    <main className={style.calls__wrapper}>
      <Header />
      <section className={style.table}>
        <h1>Привет</h1>
      </section>
    </main>
  );
};

export default Calls;
