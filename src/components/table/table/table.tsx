import { FC, useContext, useEffect } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, configColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';
import { getCalls, getFilterCalls } from '../../../api/api';
import { getEndDate, getStartDate } from '../../../utils/helpers/getDate';
import Context from '../../../services/Context';

const Table: FC = (): JSX.Element => {
  const value = useContext(Context);

  const dateStart = getStartDate(value?.interval);
  const dateEnd = getEndDate(value?.interval);

  useEffect(() => {
    switch (value?.filter) {
      case 'allTypes':
        getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
          .then((res) => value.setData(res.results))
          .catch((err) => console.error(err));
        break;
      case 'outgoing':
        getFilterCalls({
          param_one: dateStart,
          param_two: dateEnd,
          param_third: 0,
        })
          .then((res) => value.setData(res.results))
          .catch((err) => console.error(err));
        break;
      case 'incoming':
        getFilterCalls({
          param_one: dateStart,
          param_two: dateEnd,
          param_third: 1,
        })
          .then((res) => value.setData(res.results))
          .catch((err) => console.error(err));
        break;
      default:
        getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
          .then((res) => value?.setData(res.results))
          .catch((err) => console.error(err));
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateEnd, dateStart, value?.filter]);

  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={configColumns} />
      {<TableBody rows={configRows} />}
    </table>
  );
};

export default Table;
