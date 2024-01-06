import cn from 'classnames';

import style from './ratingCell.module.scss';

import Typography from '../../../typography/typography';

import { IResults } from '../../../../../utils/types/table';

/**
 * Компонент ячейки для колонки Оценка
 * Показывает на сколько успешный был разговор: 'Скрипт не использован' || 'Отлично' || 'Хорошо' || 'Плохо'
 *
 * Так как в ТЗ не были данны кретеерии фильтрации. Отрисовываю Все кроме 'Отлично'
 * @param data - Принимает данные с сервера
 */
const RatingCell = (data: IResults): JSX.Element => {
  if (data.disconnect_reason === 'Вызов завершен вызывающим абонентом') {
    return (
      <div className={cn(style.grade, style.grade_bad)}>
        <Typography tag="span" className={cn(style.grade__text, style.red)}>
          {'Плохо'}
        </Typography>
      </div>
    );
  } else if (data.errors[0] === 'Скрипт не использован') {
    return (
      <Typography tag="span" className={style.red}>
        {'Скрипт не использован'}
      </Typography>
    );
  } else if (data.status === 'Дозвонился') {
    return (
      <div className={cn(style.grade, style.grade_good)}>
        <Typography tag="span" className={cn(style.grade__text, style.primary)}>
          {'Хорошо'}
        </Typography>
      </div>
    );
  } else {
    return (
      <Typography tag="span" className={style.red}>
        {''}
      </Typography>
    );
  }

  // ToDo Так и не понял, при каких условиях ставица оценка отлично.
  // return (
  //   <div className={cn(style.grade, style.grade_grate)}>
  //     <Typography tag="span" className={cn(style.grade__text, style.green)}>
  //       {'Отлично'}
  //     </Typography>
  //   </div>
  // );
};

export default RatingCell;
