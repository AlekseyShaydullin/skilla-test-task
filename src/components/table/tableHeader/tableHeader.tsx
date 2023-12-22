import { FC } from 'react';
import style from './tableHeader.module.scss';
import { refCols } from '../../../utils/types/common';

interface ITableHeader {
  columns: Array<refCols>;
}

/**
 * Компонент - TableHeader.
 * Отрисовывает Header таблицы.
 * @param columns - принимает на вход названия колонок
 * @example
 * <TableHeader columns={refColumns} />
 */

const TableHeader: FC<ITableHeader> = ({ columns }) => {
  console.log(columns);

  return (
    <thead className={style.header__wrapper}>
      <tr>
        {columns.map((column) => (
          <th key={column.key} className={style.cell} style={column.style}>
            {column.cellComponent(column.label)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
