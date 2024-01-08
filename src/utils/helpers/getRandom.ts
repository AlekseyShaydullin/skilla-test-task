/**
 * Обычная функция генерируещее рандомное число
 * @param min - Минимальное значение
 * @param max - Максимальное значение
 * @returns Рандомное число
 */
export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
