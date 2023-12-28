import { FC, useEffect, useState } from 'react';

import style from './calls.module.scss';
import Header from '../../components/header/header';
import Table from '../../components/table/table/table';
import Context from '../../services/Context';
import { sortChecked } from '../../utils/types/common';
import { useGetData } from '../../utils/hooks/getData';
import { IResults } from '../../utils/types/table';
import { getCalls } from '../../api/api';
// import { useGetSort } from '../../utils/hooks/useGetSort';

const Calls: FC = (): JSX.Element => {
  //Состояния Table
  const [data, setData] = useState<Array<IResults> | null>(null);

  const [directionTime, setDirectionTime] = useState<sortChecked>(
    sortChecked.Default
  );
  const [directionDuration, setDirectionDuration] = useState<sortChecked>(
    sortChecked.Default
  );

  return (
    <Context.Provider
      value={{
        data,
        setData,
        // interval,
        // setInterval,
        // callTypes,
        // setCallTypes,
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
