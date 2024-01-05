import { FC, useContext, useState } from 'react';

import style from './tableBody.module.scss';

import Context from '../../../services/Context';

import { configRows } from '../table/tableConfig';
import getSortedData from '../../../utils/helpers/getSortedData';

/**
 * Компонент - TableBody.
 * @returns Отрисовывает Тело Таблицы
 * @example <TableBody />
 */
const TableBody: FC = (): JSX.Element => {
  const [isHovering, setHovering] = useState<number | null>(null);
  const value = useContext(Context);

  // Сортируем данные перед отрисовкой таблицы
  const sortedData = getSortedData(value);

  // Настраиваем состояние ховера на строки
  const handleMouseEnter = (index: number) => {
    setHovering(index);
  };
  const handleMouseLeave = () => {
    setHovering(null);
  };

  return (
    <tbody className={style.body__wrapper}>
      {sortedData?.map((data) => (
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
      ))}
    </tbody>
  );
};

export default TableBody;
