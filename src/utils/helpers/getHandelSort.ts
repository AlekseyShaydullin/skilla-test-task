import { sortChecked } from '../types/common';
import { IContext } from '../types/context';

/**
 * Функция выбора состояния Хэндлера сортировки
 * @param id - ID Хэндлера
 * @param value - Принимает контекст
 * @returns Хэндлер сортировки
 */
export const getHandelSort = (id: string, value: IContext | null) => {
  const handelSort = () => {
    //Если сортируем по Времени
    if (id === 'time' && value) {
      switch (value.directionTime) {
        case 'default':
          value.setDirectionTime(sortChecked.ASC);
          value?.setDirectionDuration(sortChecked.DEFAULT);
          break;
        case 'asc':
          value.setDirectionTime(sortChecked.DESC);
          value?.setDirectionDuration(sortChecked.DEFAULT);
          break;
        case 'desc':
          value.setDirectionTime(sortChecked.ASC);
          value?.setDirectionDuration(sortChecked.DEFAULT);
          break;
        default:
          value.setDirectionTime(sortChecked.ASC);
          break;
      }
      // Если сортируем по Длительности
    } else if (id === 'duration' && value) {
      switch (value.directionDuration) {
        case 'default':
          value.setDirectionDuration(sortChecked.ASC);
          value.setDirectionTime(sortChecked.DEFAULT);
          break;
        case 'asc':
          value.setDirectionDuration(sortChecked.DESC);
          value.setDirectionTime(sortChecked.DEFAULT);
          break;
        case 'desc':
          value.setDirectionDuration(sortChecked.ASC);
          value.setDirectionTime(sortChecked.DEFAULT);
          break;
        default:
          value.setDirectionDuration(sortChecked.ASC);
          break;
      }
    }
  };

  return handelSort;
};
