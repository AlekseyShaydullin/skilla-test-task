import { FC, useContext } from 'react';
import style from './tableBody.module.scss';
import { IResults } from '../../../utils/types/table';
import Context from '../../../services/Context';
import { sortChecked } from '../../../utils/types/common';
import { configRows } from '../table/tableConfig';

interface ITableBody {
  data: Array<IResults> | null;
}

const TableBody: FC<ITableBody> = ({ data }): JSX.Element => {
  const value = useContext(Context);
  let sortedData: Array<IResults> | null | undefined = [];

  if (
    value?.directionTime === 'default' &&
    value?.directionDuration === 'default'
  ) {
    sortedData = data;
  } else if (value?.directionTime !== 'default') {
    sortedData = data?.sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return value?.directionTime === sortChecked.ASC
        ? timeA - timeB
        : timeB - timeA;
    });
  } else if (value?.directionDuration !== 'default') {
    sortedData = data?.sort((a, b) => {
      const timeA = a.time;
      const timeB = b.time;
      return value?.directionDuration === sortChecked.ASC
        ? timeA - timeB
        : timeB - timeA;
    });
  }

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
