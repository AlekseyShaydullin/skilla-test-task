import { sortChecked } from '../types/common';
import { IContext } from '../types/context';
import { IResults } from '../types/table';

/**
 * Функция сортировки данных
 * @param value - Принимает контекст
 * @returns Возвращает отсортированный (по дате, по длительности) массив объектов
 */
const getSortedData = (value: IContext | null) => {
  let sortedData: Array<IResults> | null | undefined = [];

  if (
    value?.directionTime === 'default' &&
    value?.directionDuration === 'default'
  ) {
    sortedData = value.data;
  } else if (value?.directionTime !== 'default') {
    sortedData = value?.data?.sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return value?.directionTime === sortChecked.ASC
        ? timeA - timeB
        : timeB - timeA;
    });
  } else if (value?.directionDuration !== 'default') {
    sortedData = value?.data?.sort((a, b) => {
      const timeA = a.time;
      const timeB = b.time;
      return value?.directionDuration === sortChecked.ASC
        ? timeA - timeB
        : timeB - timeA;
    });
  }

  return sortedData;
};

export default getSortedData;
