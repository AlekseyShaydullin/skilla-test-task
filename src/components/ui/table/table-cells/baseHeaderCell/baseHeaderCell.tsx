import style from './baseHeaderCell.module.scss';

import Typography from '../../../typography/typography';

/**
 * Компонент ячейки Шапки таблицы Цвет текста $text-secondary
 * @param data - Принимает название колонки таблицы
 */
export const BaseHeaderCell = (data: string): JSX.Element => (
  <Typography tag="h2" className={style.secondary}>
    {data}
  </Typography>
);
