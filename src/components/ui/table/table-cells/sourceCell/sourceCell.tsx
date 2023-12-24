import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/Typography';
import style from './sourceCell.module.scss';

/**
 * Компонент ячейки для колонки Источник
 * @param data - Принимает данные с сервера
 */
const SourceCell = (data: IResults) => (
  <Typography tag="p" className={style.secondary}>
    {data?.source}
  </Typography>
);

export default SourceCell;
