import { getEndDate, getStartDate } from '../helpers/getDate';
import { getCalls, getFilterCalls } from '../../api/api';
import { IResults } from '../types/table';

export const getData = async (choiceDate: string, callTypes: string) => {
  let data: IResults[] = [];

  const dateStart = getStartDate(choiceDate);
  const dateEnd = getEndDate();

  if (callTypes === 'allTypes') {
    const res = await getCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: '',
    });
    data = res.results;
  } else if (callTypes === 'outgoing') {
    const res = await getFilterCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: 0,
    });
    data = res.results;
  } else if (callTypes === 'incoming') {
    const res = await getFilterCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: 1,
    });
    data = res.results;
  }

  return data;
};
