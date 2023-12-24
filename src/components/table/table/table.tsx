import { FC, useEffect, useState } from 'react';
import style from './table.module.scss';
import TableHeader from '../tableHeader/tableHeader';
import { configRows, configColumns } from './tableConfig';
import TableBody from '../tableBody/tableBody';
import { IResults } from '../../../utils/types/table';
import { getCalls } from '../../../api/api';

const Table: FC = () => {
  const [data, setData] = useState<Array<IResults> | null>(null);

  useEffect(() => {
    getCalls({ param_one: '2023-12-14', param_two: '2023-12-14' })
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <table className={style.tableWrapper}>
      <TableHeader columns={configColumns} />
      {data && <TableBody data={data} rows={configRows} />}
    </table>
  );
};

export default Table;
