import { FC, useEffect, useState } from 'react';

import style from './calls.module.scss';

import Header from '../../components/header/header';
import Table from '../../components/table/table/table';

import Context from '../../services/Context';

import {
  optionsCallsValue,
  optionsDateValue,
  sortChecked,
} from '../../utils/types/common';
import { IResults } from '../../utils/types/table';
import { getEndDate, getStartDate } from '../../utils/helpers/getDate';

import { getCalls } from '../../api/api';

const Calls: FC = (): JSX.Element => {
  //Глобальные состояния приложения
  const [data, setData] = useState<Array<IResults> | null>(null);
  const [callTypes, setCallTypes] = useState<string>(
    optionsCallsValue.ALLTYPES
  );
  const [choiceDate, setChoiceDate] = useState<string>(
    optionsDateValue.THREEDAYS
  );
  const [directionTime, setDirectionTime] = useState<sortChecked>(
    sortChecked.DEFAULT
  );
  const [directionDuration, setDirectionDuration] = useState<sortChecked>(
    sortChecked.DEFAULT
  );

  // Получение интересующего интервала дат для запроса
  const dateStart = getStartDate(choiceDate);
  const dateEnd = getEndDate();

  // Получение данных для старта приложения
  useEffect(() => {
    getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        callTypes,
        setCallTypes,
        choiceDate,
        setChoiceDate,
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
