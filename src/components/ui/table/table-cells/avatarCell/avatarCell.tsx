import style from './avatarCell.module.scss';
import { IResults } from '../../../../../utils/types/table';

/**
 * Компонент ячейки для Аватарок
 * @param data - Принимает данные с сервера
 */
export const AvatarCell = (data: IResults) => (
  <img
    src={data?.person_avatar}
    alt="аватарка сотрудника"
    className={style.avatar}
  />
);

export default AvatarCell;
