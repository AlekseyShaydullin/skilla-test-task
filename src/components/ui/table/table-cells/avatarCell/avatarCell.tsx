import { FC } from 'react';

import style from './avatarCell.module.scss';

import Icon from '../../../icon/icon';

import { IResults } from '../../../../../utils/types/table';

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
