import cn from 'classnames';

import style from './ratingCell.module.scss';

import Typography from '../../../typography/typography';

import { getRandom } from '../../../../../utils/helpers/getRandom';

/**
 * Компонент ячейки для колонки Оценка
 * Показывает на сколько успешный был разговор: 'Скрипт не использован' || 'Отлично' || 'Хорошо' || 'Плохо'
 *
 * Так как в ТЗ не были данны кретеерии фильтрации. Отрисовываю рандомно
 * @param data - Принимает данные с сервера
 */
const RatingCell = (): JSX.Element => {
  const randomInt = getRandom(0, 4);

  switch (randomInt) {
    case 0:
      return (
        <Typography tag="span" className={style.red}>
          {''}
        </Typography>
      );
    case 1:
      return (
        <div className={cn(style.grade, style.grade_grate)}>
          <Typography tag="span" className={cn(style.grade__text, style.green)}>
            {'Отлично'}
          </Typography>
        </div>
      );
    case 2:
      return (
        <div className={cn(style.grade, style.grade_good)}>
          <Typography
            tag="span"
            className={cn(style.grade__text, style.primary)}
          >
            {'Хорошо'}
          </Typography>
        </div>
      );
    case 3:
      return (
        <div className={cn(style.grade, style.grade_bad)}>
          <Typography tag="span" className={cn(style.grade__text, style.red)}>
            {'Плохо'}
          </Typography>
        </div>
      );
    case 4:
      return (
        <Typography tag="span" className={style.red}>
          {'Скрипт не использован'}
        </Typography>
      );
    default:
      return (
        <Typography tag="span" className={style.red}>
          {'Скрипт не использован'}
        </Typography>
      );
  }
};

export default RatingCell;
