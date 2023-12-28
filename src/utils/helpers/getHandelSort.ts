import { sortChecked } from '../types/common';
import { IContext } from '../types/context';

export const getHandelSort = (id: string, value: IContext | null) => {
  const handelSort = () => {
    if (id === 'time' && value) {
      switch (value.directionTime) {
        case 'default':
          value.setDirectionTime(sortChecked.ASC);
          value?.setDirectionDuration(sortChecked.Default);
          break;
        case 'asc':
          value.setDirectionTime(sortChecked.DESC);
          value?.setDirectionDuration(sortChecked.Default);
          break;
        case 'desc':
          value.setDirectionTime(sortChecked.ASC);
          value?.setDirectionDuration(sortChecked.Default);
          break;
        default:
          value.setDirectionTime(sortChecked.ASC);
          break;
      }
    } else if (id === 'duration' && value) {
      switch (value.directionDuration) {
        case 'default':
          value.setDirectionDuration(sortChecked.ASC);
          value.setDirectionTime(sortChecked.Default);
          break;
        case 'asc':
          value.setDirectionDuration(sortChecked.DESC);
          value.setDirectionTime(sortChecked.Default);
          break;
        case 'desc':
          value.setDirectionDuration(sortChecked.ASC);
          value.setDirectionTime(sortChecked.Default);
          break;
        default:
          value.setDirectionDuration(sortChecked.ASC);
          break;
      }
    }
  };

  return handelSort;
};
