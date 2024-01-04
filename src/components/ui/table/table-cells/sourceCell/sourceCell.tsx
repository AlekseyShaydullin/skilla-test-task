import style from './sourceCell.module.scss';

import Typography from '../../../typography/typography';

import { IResults } from '../../../../../utils/types/table';

/**
 * Компонент ячейки для колонки Источник
 * @param data - Принимает данные с сервера
 */
const SourceCell = (data: IResults): JSX.Element => (
  <Typography tag="p" className={style.secondary}>
    {data?.source}
  </Typography>
);

export default SourceCell;
