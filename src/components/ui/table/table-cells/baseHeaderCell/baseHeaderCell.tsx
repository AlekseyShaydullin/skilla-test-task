import style from './baseHeaderCell.module.scss';
import Typography from '../../../typography/Typography';

/**
 * Компонент ячейки Шапки таблицы Цвет текста $text-secondary
 * @param data - Принимает название колонки таблицы
 */
export const BaseHeaderCell = (data: string) => (
  <Typography tag="h2" className={style.secondary}>
    {data}
  </Typography>
);
