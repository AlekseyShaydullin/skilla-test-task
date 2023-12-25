import { FC } from 'react';
import style from './tableHeader.module.scss';
import { IRefColumns } from '../../../utils/types/table';

interface ITableHeader {
  columns: Array<IRefColumns>;
}

/**
 * Компонент - TableHeader.
 * Отрисовывает Header таблицы.
 * @param columns - принимает на вход данные ячеек шапки таблицы
 * @example
 * <TableHeader columns={refColumns} />
 */

const TableHeader: FC<ITableHeader> = ({ columns }) => {
  return (
    <thead>
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
