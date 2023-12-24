import { FC } from 'react';
import style from './tableBody.module.scss';
import { IConfigRows, IData } from '../../../utils/types/table';

interface ITableBody {
  data: Array<IData>;
  rows: Array<IConfigRows>;
}

const TableBody: FC<ITableBody> = ({ data, rows }) => {
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

  return (
    <tbody className={style.body__wrapper}>
      {data?.map((data, index) => (
        <tr key={index} className={style.row}>
          {rows.map((row, index) => (
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
