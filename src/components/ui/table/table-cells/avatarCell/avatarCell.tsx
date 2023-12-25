import style from './avatarCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import { FC } from 'react';
import Icon from '../../../icon/icon';

/**
 * Компонент ячейки для Аватарок
 * @param data - Принимает данные с сервера
 */
const AvatarCell: FC<IResults> = (data): JSX.Element => {
  return (
    <>
      {data?.person_avatar !== '' ? (
        <img
          src={data?.person_avatar}
          alt="аватарка сотрудника"
          className={style.avatar}
        />
      ) : (
        <Icon name="avatar" isColored={false} extraClass={style.avatar} />
      )}
    </>
  );
};

export default AvatarCell;
