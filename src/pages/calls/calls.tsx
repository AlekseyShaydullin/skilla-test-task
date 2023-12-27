import { FC, useState } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';
import Context from '../../services/Context';
import { sortChecked } from '../../utils/types/common';
import { useGetData } from '../../utils/hooks/useGetData';
import { useGetSort } from '../../utils/hooks/useGetSort';

const Calls: FC = (): JSX.Element => {
  //Состояния Header
  const [filter, setFilter] = useState<string>('allTypes');
  const [interval, setInterval] = useState<string>('threeDays');

  //Состояния Table
  const data = useGetData(interval, filter);
  const [directionTime, setDirectionTime] = useState<sortChecked>(
    sortChecked.Default
  );
  const [directionDuration, setDirectionDuration] = useState<sortChecked>(
    sortChecked.Default
  );

  const sortedData = useGetSort(data, directionTime, directionDuration);

  return (
    <Context.Provider
      value={{
        interval,
        setInterval,
        filter,
        setFilter,
        directionTime,
        setDirectionTime,
        directionDuration,
        setDirectionDuration,
        sortedData,
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
