import cn from 'classnames';
import style from './iconTypeCallCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import Icon from '../../../icon/icon';

/**
 * Компонент ячейки для колонки Тип звонка
 * Показывает тип звонка 'Входящие' || 'Исходящие' || 'Пропущенный' || 'Недозвон'
 * @param data - Принимает данные с сервера
 */
export const IconTypeCallCell = (data: IResults): JSX.Element => (
  <Icon
    name={data?.in_out === 1 ? 'call-incoming' : 'call-outgoing'}
    isColored
    extraClass={cn(
      style.iconCall,
      data?.in_out === 1 && data.time !== 0
        ? style.iconCall_blue
        : data?.in_out === 0 && data?.status !== 'Не дозвонился'
          ? style.iconCall_green
          : data?.status === 'Не дозвонился'
            ? style.iconCall_red
            : data?.time === 0
              ? style.iconCall_red
              : ''
    )}
  />
);
