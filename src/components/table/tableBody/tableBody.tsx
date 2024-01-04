import { FC, useContext } from 'react';

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
  const value = useContext(Context);

  // Сортируем данные перед отрисовкой таблицы
  const sortedData = getSortedData(value);

  // const [isHovering, setHovering] = useState(false);
  // const refRow = useRef<HTMLTableRowElement>(null);

  // const on = () => setHovering(true);
  // const off = () => setHovering(false);

  // useEffect(() => {
  //   if (!refRow.current) {
  //     return;
  //   }
  //   const node = refRow.current;

  //   node.addEventListener('mouseenter', on);
  //   node.addEventListener('mousemove', on);
  //   node.addEventListener('mouseleave', off);

  //   return function () {
  //     node.removeEventListener('mouseenter', on);
  //     node.removeEventListener('mousemove', on);
  //     node.removeEventListener('mouseleave', off);
  //   };
  // }, [refRow]);

  // console.log(isHovering);

  // console.log(data?.map((d) => d.in_out));

  return (
    <tbody className={style.body__wrapper}>
      {sortedData?.map((data, index) => (
        <tr key={index} className={style.row}>
          {configRows.map((row, index) => (
            <td key={index} className={style.cell} style={row.style}>
              {row.cellComponent(data)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
