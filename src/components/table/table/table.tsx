import { FC } from 'react';

import style from './table.module.scss';

import TableHeader from '../tableHeader/tableHeader';
import TableBody from '../tableBody/tableBody';

/**
 * Компонент - Table
 * @returns - Отрисовывает Таблицу
 * @example <Table />
 */
const Table: FC = (): JSX.Element => {
  return (
    <table className={style.tableWrapper}>
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
