import { convertDate } from './convertDate';

/**
 * Функция, которая заголовок дня
 * @param data Принимает число в виде строки
 * @returns Возвращает Заголовок дня
 */
export const getDateTitle = (data: string): string => {
  // Получаем актуальную дату
  const startDate = new Date();
  const today = startDate.toISOString().split('T')[0];
  // Получаем вчерашнюю дату
  const date = new Date();
  date.setDate(startDate.getDate() - 1);
  const yesterday = date.toISOString().split('T')[0];

  if (data === today) {
    return 'Сегодня';
  } else if (data === yesterday) {
    return 'Вчера';
  } else {
    return convertDate(data);
  }
};
