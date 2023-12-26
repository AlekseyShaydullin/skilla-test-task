import { useContext } from 'react';
import { sortChecked } from '../types/common';
import Context from '../../services/Context';

export const useHandelSort = (id: string) => {
  const value = useContext(Context);

  const handelSort = () => {
    if (id === 'time') {
      switch (value?.directionTime) {
        case 'default':
          value?.setDirectionTime(sortChecked.ASC);
          break;
        case 'asc':
          value?.setDirectionTime(sortChecked.DESC);
          break;
        case 'desc':
          value?.setDirectionTime(sortChecked.ASC);
          break;
        default:
          value?.setDirectionTime(sortChecked.Default);
          break;
      }
    } else {
      switch (value?.directionDuration) {
        case 'default':
          value?.setDirectionDuration(sortChecked.ASC);
          break;
        case 'asc':
          value?.setDirectionDuration(sortChecked.DESC);
          break;
        case 'desc':
          value?.setDirectionDuration(sortChecked.ASC);
          break;
        default:
          value?.setDirectionDuration(sortChecked.Default);
          break;
      }
    }
  };

  value?.directionDuration === 'asc' && value?.directionTime !== 'default'
    ? value?.setDirectionTime(sortChecked.Default)
    : value?.directionTime === 'asc' && value?.directionDuration !== 'default'
      ? value?.setDirectionDuration(sortChecked.Default)
      : null;

  return { handelSort };
};
