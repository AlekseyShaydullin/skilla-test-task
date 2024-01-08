import { IResults } from '../types/table';
import { getDateTitle } from './getDateTitle';

export interface IFormateCall {
  date: string;
  dateTitle: string;
  calls: Array<IResults>;
}

/**
 * Функция, которая перебирает массив звонков, и групперует по датам
 * @param data Принимает отфильтрованный и отсортированный массив звонков
 * @returns Возвращает сгрупперованный массив звонков по датам
 */
export const getTitleCalls = (data: Array<IResults>): Array<IFormateCall> => {
  const calls: Array<IFormateCall> = [];
  data.forEach((call) => {
    const currentDate = call.date_notime;
    const existDate = calls.find((item) => item.date === currentDate);

    if (existDate) {
      existDate.calls.push(call);
    } else {
      calls.push({
        date: currentDate,
        dateTitle: getDateTitle(currentDate),
        calls: [call],
      });
    }
  });

  return calls;
};
