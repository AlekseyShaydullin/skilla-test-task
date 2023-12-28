import { useContext } from 'react';

import style from './baseHeaderIconCell.module.scss';
import ButtonIconText from '../../../buttons/buttonIconText/buttonIconText';
import Context from '../../../../../services/Context';
import { getHandelSort } from '../../../../../utils/helpers/getHandelSort';

/**
 * Компонент ячейки Шапки таблицы с Иконкой Chevron
 * @param data - Принимает название колонки таблицы
 * @param key - Принимает ключ
 */
const BaseHeaderIconCell = (data: string, key: string): JSX.Element => {
  const value = useContext(Context);
  const handelSort = getHandelSort(key, value);

  return (
    <div
      className={
        data !== 'Длительность'
          ? style.wrapper
          : `${style.wrapper} ${style.wrapper_end}`
      }
    >
      <ButtonIconText
        icon="chevron"
        tag="h2"
        title={data}
        isColored
        buttonClass={style.button}
        iconClass={style.iconChevron}
        titleClass={style.secondary}
        iconFirst={false}
        onClick={handelSort}
        id={key}
      />
    </div>
  );
};

export default BaseHeaderIconCell;
