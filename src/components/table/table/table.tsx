import { FC, useEffect, useState } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, configColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';
import { IResults } from '../../../utils/types/table';
import { getCalls, getFilterCalls } from '../../../api/api';
import { getEndDate, getStartDate } from '../../../utils/helpers/getDate';

interface ITable {
  interval: string;
  filter: string;
}

const Table: FC<ITable> = ({ interval, filter }): JSX.Element => {
  const [data, setData] = useState<Array<IResults> | null>(null);

  const dateStart = getStartDate(interval);
  const dateEnd = getEndDate(interval);

  useEffect(() => {
    switch (filter) {
      case 'allTypes':
        getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
          .then((res) => setData(res.results))
          .catch((err) => console.error(err));
        break;
      case 'outgoing':
        getFilterCalls({
          param_one: dateStart,
          param_two: dateEnd,
          param_third: 0,
        })
          .then((res) => setData(res.results))
          .catch((err) => console.error(err));
        break;
      case 'incoming':
        getFilterCalls({
          param_one: dateStart,
          param_two: dateEnd,
          param_third: 1,
        })
          .then((res) => setData(res.results))
          .catch((err) => console.error(err));
        break;
      default:
        getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
          .then((res) => setData(res.results))
          .catch((err) => console.error(err));
        break;
    }
  }, [dateEnd, dateStart, filter]);

  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={configColumns} />
      {data && <TableBody data={data} rows={configRows} />}
    </table>
  );
};

export default Table;
