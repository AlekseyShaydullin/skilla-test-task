import { FC } from 'react';

import TableTitle from '../../ui/table/tableTitle/tableTitle';
import TableRow from './tableRow';

import { IFormateCall } from '../../../utils/helpers/getTitleCalls';

interface ITableRows {
  calls: IFormateCall;
}

/**
 * Компонент - TableRows.
 * @param calls Принимает данные отфильтрованные и отсортированные и разбитые по дням
 * @returns Отрисовывает строки всей таблицы
 * @example <TableRows calls={calls} />
 */
const TableRows: FC<ITableRows> = ({ calls }) => {
  return (
    <>
      {calls.dateTitle !== 'Сегодня' ? (
        <>
          <tr>
            <TableTitle calls={calls} />
          </tr>
          {calls.calls?.map((data) => <TableRow data={data} key={data.id} />)}
        </>
      ) : (
        <>
          {calls.calls?.map((data) => <TableRow data={data} key={data.id} />)}
        </>
      )}
    </>
  );
};

export default TableRows;
