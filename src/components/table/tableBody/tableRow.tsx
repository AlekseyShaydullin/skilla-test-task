import { FC, useState } from 'react';

import style from './tableBody.module.scss';

import { configRows } from '../tableConfig';

import { IResults } from '../../../utils/types/table';

interface ITableRow {
  data: IResults;
}

/**
 * Компонент - TableRow.
 * @param data Принимает данные о звонке
 * @returns Отрисовывает строку таблицы
 * @example <TableRow data={data} key={data.id} />
 */
const TableRow: FC<ITableRow> = ({ data }) => {
  const [isHovering, setHovering] = useState<number | null>(null);

  // Настраиваем состояние ховера на строки
  const handleMouseEnter = (index: number) => {
    setHovering(index);
  };
  const handleMouseLeave = () => {
    setHovering(null);
  };

  return (
    <tr
      key={data.id}
      className={style.row}
      onMouseEnter={() => handleMouseEnter(data.id)}
      onMouseLeave={handleMouseLeave}
    >
      {configRows.map((row, index) => (
        <td key={index} className={style.cell} style={row.style}>
          {row.cellComponent(data, isHovering)}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
