/**
 * Функция преобразования даты
 * @param date Принимает дату в формате YYYY.MM.DD
 * @returns Возвращает дату в формате DD.MM.YYYY
 */
export const convertDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};
