import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/typography';
import style from './sourceCell.module.scss';

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
