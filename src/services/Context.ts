import { createContext } from 'react';
import { IContext } from '../utils/types/context';

const Context = createContext<IContext | null>(null);

export default Context;
