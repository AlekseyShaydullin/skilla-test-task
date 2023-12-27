import { FC } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, configColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';

const Table: FC = (): JSX.Element => {
  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={configColumns} />
      <TableBody rows={configRows} />
    </table>
  );
};

export default Table;
