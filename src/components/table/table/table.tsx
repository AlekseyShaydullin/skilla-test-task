import { FC, useEffect, useState } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, configColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';
import { IResults } from '../../../utils/types/table';
import { getCalls } from '../../../api/api';
import { getEndDate, getStartDate } from '../../../utils/helpers/getDate';

interface ITable {
  interval: string;
}

const Table: FC<ITable> = ({ interval }) => {
  const [data, setData] = useState<Array<IResults> | null>(null);

  const dateStart = getStartDate(interval);
  const dateEnd = getEndDate(interval);

  useEffect(() => {
    //dateStart - Сегодня dateEnd - (3 дня, 7 дней, месяц, год)
    getCalls({ param_one: dateStart, param_two: dateEnd })
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, [dateEnd, dateStart]);

  console.log(data);

  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={configColumns} />
      {data && <TableBody data={data} rows={configRows} />}
    </table>
  );
};

export default Table;
