import { FC } from 'react';

import style from './tableHeader.module.scss';

import { configColumns } from '../tableConfig';

/**
 * Компонент - TableHeader.
 * @returns Отрисовывает Header таблицы.
 * @example <TableHeader />
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
