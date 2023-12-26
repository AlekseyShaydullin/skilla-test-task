import { FC, useState } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';
import Context from '../../services/Context';
import { sortChecked } from '../../utils/types/common';
import { IResults } from '../../utils/types/table';

const Calls: FC = (): JSX.Element => {
  const [data, setData] = useState<Array<IResults> | null>(null);
  const [interval, setInterval] = useState<string>('threeDays');
  const [filter, setFilter] = useState<string>('allTypes');
  const [directionTime, setDirectionTime] = useState<sortChecked>(
    sortChecked.Default
  );
  const [directionDuration, setDirectionDuration] = useState<sortChecked>(
    sortChecked.Default
  );

  console.log(directionTime);
  console.log(directionDuration);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        interval,
        setInterval,
        filter,
        setFilter,
        directionTime,
        setDirectionTime,
        directionDuration,
        setDirectionDuration,
      }}
    >
      <main className={style.calls__wrapper}>
        <Header />
        <Table />
      </main>
    </Context.Provider>
  );
};

export default Calls;
