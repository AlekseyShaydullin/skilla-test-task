import { FC } from 'react';
import style from './tableHeader.module.scss';
import { configColumns } from '../table/tableConfig';

/**
 * Компонент - TableHeader.
 * Отрисовывает Header таблицы.
 * @param columns - принимает на вход данные ячеек шапки таблицы
 * @example
 * <TableHeader columns={refColumns} />
 */

const TableHeader: FC = (): JSX.Element => {
  return (
    <thead>
      <tr>
        {configColumns.map((column) => (
          <th key={column.key} className={style.cell} style={column.style}>
            {column.cellComponent(column.label, column.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
