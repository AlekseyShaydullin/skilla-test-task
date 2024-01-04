import { getEndDate, getStartDate } from './getDate';

import { getCalls, getFilterCalls } from '../../api/api';

import { IResults } from '../types/table';
import { inOut, optionsCallsValue } from '../types/common';

/**
 * Функция выбора запроса на сервер для получения данных в зависимочти от фильтра
 * @param callTypes Типы звоноков
 * @param choiceDate Времянная выборка звоноков
 * @returns Возвращает Promise данных с сервера
 */
export const getDataTable = async (
  callTypes: string,
  choiceDate: string
): Promise<Array<IResults>> => {
  let data: Array<IResults> = [];

  const dateStart = getStartDate(choiceDate);
  const dateEnd = getEndDate();

  console.log(callTypes);

  console.log(dateStart);
  //
  if (callTypes === optionsCallsValue.ALLTYPES) {
    const res = await getCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: inOut.ABSENT,
    });
    data = res.results;
  } else if (callTypes === optionsCallsValue.OUTGOING) {
    const res = await getFilterCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: inOut.OUTGOING,
    });
    data = res.results;
  } else if (callTypes === optionsCallsValue.INCOMING) {
    const res = await getFilterCalls({
      param_one: dateStart,
      param_two: dateEnd,
      param_third: inOut.INCOMING,
    });
    data = res.results;
  }

  return data;
};
