import { Dispatch, SetStateAction } from 'react';
import { sortChecked } from './common';
import { IResults } from './table';

export interface IContext {
  data: Array<IResults> | null;
  setData: Dispatch<SetStateAction<Array<IResults> | null>>;
  callTypes: string;
  setCallTypes: Dispatch<SetStateAction<string>>;
  choiceDate: string;
  setChoiceDate: Dispatch<SetStateAction<string>>;
  directionTime: sortChecked;
  setDirectionTime: Dispatch<SetStateAction<sortChecked>>;
  directionDuration: sortChecked;
  setDirectionDuration: Dispatch<SetStateAction<sortChecked>>;
}
