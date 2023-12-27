import { useEffect, useState } from 'react';
import { getEndDate, getStartDate } from '../helpers/getDate';
import { getCalls, getFilterCalls } from '../../api/api';
import { IResults } from '../types/table';

export const useGetData = (interval: string, filter: string) => {
  const [data, setData] = useState<Array<IResults> | null>(null);

  const dateStart = getStartDate(interval);
  const dateEnd = getEndDate();

  //Делаем запросы на сервер в зависимости от фильтра:
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
          param_third: 1,
        })
          .then((res) => setData(res.results))
          .catch((err) => console.error(err));
        break;
      case 'incoming':
        getFilterCalls({
          param_one: dateStart,
          param_two: dateEnd,
          param_third: 0,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateEnd, dateStart, filter]);

  return data;
};
