import { useEffect, useState } from 'react';
import { sortChecked } from '../types/common';
import { IResults } from '../types/table';

/**
 * Функция сортировки данных. По времени и Длительности разговора
 * @param data - Входящие данные с сервера
 * @param directionTime - Состояние сортировки по Времени
 * @param directionDuration - Состояние сортировки по Длительности разговора
 * @returns Возвращаем отсортированный массив объектов либо null, либо undefined
 * @example getSort(data, directionTime, directionDuration)
 */
export const useGetSort = (
  data: Array<IResults> | null,
  directionTime: string,
  directionDuration: string
): Array<IResults> | null | undefined => {
  const [sortedData, setSortedData] = useState<
    Array<IResults> | null | undefined
  >(null);

  useEffect(() => {
    console.log(directionTime);
    console.log(directionDuration);
    console.log('++++');

    if (directionTime === 'default' && directionDuration === 'default') {
      setSortedData(data);
    } else if (directionTime !== 'default') {
      const sortedTime = data?.sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return directionTime === sortChecked.ASC
          ? timeA - timeB
          : timeB - timeA;
      });
      setSortedData(sortedTime);
    } else if (directionDuration !== 'default') {
      const sortedDuration = data?.sort((a, b) => {
        const timeA = a.time;
        const timeB = b.time;
        return directionDuration === sortChecked.ASC
          ? timeA - timeB
          : timeB - timeA;
      });
      setSortedData(sortedDuration);
    }
  }, [data, directionDuration, directionTime]);

  return sortedData;

  // // проверяем на дурака. Вдруг нет данных
  // if (data === null) {
  //   return null;
  // }
  // // если не нажимали кнопку сортировки, то ничего не делаем
  // else if (
  //   directionTime === sortChecked.Default ||
  //   directionDuration === sortChecked.Default
  // ) {
  //   return data;

  //   // если нажали кнопку сортировки по Длительности, сортируем:
  // } else if (directionDuration === sortChecked.ASC) {
  //   console.log('Привет Длительности');
  //   return data.sort((a, b) => (a.date > b.date ? 1 : -1));
  // } else if (directionDuration === 'desc') {
  //   console.log('И тебе привет');
  //   return data.sort((a, b) => (a.date < b.date ? 1 : -1));

  //   // если нажали кнопку сортировки по времени, сортируем:
  // } else if (directionTime === sortChecked.ASC) {
  //   console.log('Привет Времени');
  //   return data.sort((a, b) => (a.time > b.time ? 1 : -1));
  // } else if (directionTime === sortChecked.DESC) {
  //   console.log('И тебе привет');
  //   return data.sort((a, b) => (a.time < b.time ? 1 : -1));
  // }
};
