import { FC } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, refColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';
import { mokData } from '../../../utils/mok';

const Table: FC = () => {
  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={refColumns} />
      <TableBody data={mokData} rows={configRows} />
    </table>
  );
};

export default Table;
