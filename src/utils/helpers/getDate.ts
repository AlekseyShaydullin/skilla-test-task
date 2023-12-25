/**
 * Функция, которая возвращает date_end для запроса на сервер
 * @param interval - Данные из DatePicker
 * @returns Возвращает дату в формате YYYY-MM-DD
 */
export const getEndDate = (interval: string) => {
  /** Заготовки под даты */
  const today = new Date();
  const weekAgo = new Date(today);
  const monthAgo = new Date(today);
  const yearAgo = new Date(today);

  switch (interval) {
    case 'threeDays':
      return today.toISOString().split('T')[0];
    case 'week':
      weekAgo.setDate(today.getDate() - 7);
      return weekAgo.toISOString().split('T')[0];
    case 'month':
      monthAgo.setMonth(today.getMonth() - 1);
      return monthAgo.toISOString().split('T')[0];
    case 'year':
      yearAgo.setFullYear(today.getFullYear() - 1);
      return yearAgo.toISOString().split('T')[0];
    default:
      return today.toISOString().split('T')[0];
  }
};

/**
 * Функция, которая возвращает date_start для запроса на сервер
 * @param interval - Данные из DatePicker
 * @returns Возвращает дату в формате YYYY-MM-DD
 */
export const getStartDate = (interval: string) => {
  /** Заготовки под даты */
  const startDate = new Date(getEndDate(interval));
  const threeDaysAgo = new Date(startDate);
  const weekAgo = new Date(startDate);
  const monthAgo = new Date(startDate);
  const yearLater = new Date(startDate);

  switch (interval) {
    case 'threeDays':
      threeDaysAgo.setDate(startDate.getDate() - 3);
      return threeDaysAgo.toISOString().split('T')[0];
    case 'week':
      weekAgo.setDate(startDate.getDate() - 7);
      return weekAgo.toISOString().split('T')[0];
    case 'month':
      monthAgo.setMonth(startDate.getMonth() - 1);
      return monthAgo.toISOString().split('T')[0];
    case 'year':
      yearLater.setFullYear(startDate.getFullYear() + 1);
      return yearLater.toISOString().split('T')[0];
    default:
      return startDate.toISOString().split('T')[0];
  }
};
