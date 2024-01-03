import { FC } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import TableBody from '../tableBody/tableBody';
import { IResults } from '../../../utils/types/table';

interface ITable {
  data: Array<IResults> | null;
}

const Table: FC<ITable> = ({ data }): JSX.Element => {
  return (
    <table className={style.tableWrapper}>
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
