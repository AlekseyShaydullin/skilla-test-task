import style from './baseHeaderIconCell.module.scss';
import Icon from '../../../icon/icon';
import Typography from '../../../typography/Typography';

/**
 * Компонент ячейки Шапки таблицы с Иконкой Chevron
 * @param data - Принимает название колонки таблицы
 */
export const BaseHeaderIconCell = (data: string) => (
  <div
    className={
      data !== 'Длительность'
        ? style.wrapper
        : `${style.wrapper} ${style.wrapper_end}`
    }
  >
    <Typography tag="h2" className={style.secondary}>
      {data}
    </Typography>
    <Icon name="chevron" isColored extraClass={style.iconChevron} />
  </div>
);
