import { Dispatch, SetStateAction } from 'react';
import { sortChecked } from './common';
import { IResults } from './table';

export interface IContext {
  data: Array<IResults> | null;
  setData: Dispatch<SetStateAction<Array<IResults> | null>>;
  interval: string;
  setInterval: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  directionTime: sortChecked;
  setDirectionTime: Dispatch<SetStateAction<sortChecked>>;
  directionDuration: sortChecked;
  setDirectionDuration: Dispatch<SetStateAction<sortChecked>>;
}
