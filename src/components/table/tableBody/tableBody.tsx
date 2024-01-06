import { FC, useContext } from 'react';

import style from './tableBody.module.scss';

import Context from '../../../services/Context';

import TableRows from './tableRows';

import getSortedData from '../../../utils/helpers/getSortedData';
import { getTitleCalls } from '../../../utils/helpers/getTitleCalls';

/**
 * Компонент - TableBody.
 * @returns Отрисовывает Тело Таблицы
 * @example <TableBody />
 */
const TableBody: FC = (): JSX.Element => {
  const value = useContext(Context);

  // Сортируем данные перед отрисовкой таблицы
  const sortedData = getSortedData(value);

  // Разбиваем звонки по датам и присваиваем Тайтлы
  const titleCalls = sortedData && getTitleCalls(sortedData);

  return (
    <tbody className={style.body__wrapper}>
      {titleCalls &&
        titleCalls.map((calls, index) => (
          <TableRows calls={calls} key={index} />
        ))}
    </tbody>
  );
};

export default TableBody;
