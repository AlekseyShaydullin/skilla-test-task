/**
 * Функция преобразует продолжительность разговора приходящую с сервера
 * @param time - продолжительность разговора приходящая с сервера
 * @returns возвращает продолжительность разговора формате MM:SS
 */
export const getDuration = (time: number): string => {
  const currentTime = time;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  return currentTime === 0
    ? ''
    : `${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`;
};
