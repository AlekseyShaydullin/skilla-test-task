import { FC } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { refColumns } from './tableConfig';

const Table: FC = () => {
  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={refColumns} />
    </table>
  );
};

export default Table;
