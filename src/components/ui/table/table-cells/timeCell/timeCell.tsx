import { FC } from 'react';
import style from './timeCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/Typography';

/**
 * Компонент ячейки для колонки Время
 * Ячейка показывает в какое врмя был произведён звонок
 * @param data - Принимает данные с сервера
 */
export const TimeCell: FC<IResults> = (data) => {
  const time = data?.date.slice(10, 16);

  return (
    <Typography tag="p" className={style.primary}>
      {time}
    </Typography>
  );
};
