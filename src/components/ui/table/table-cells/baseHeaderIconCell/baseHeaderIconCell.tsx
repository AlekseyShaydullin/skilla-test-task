import { useContext, useRef } from 'react';

import style from './baseHeaderIconCell.module.scss';
import ButtonIconText from '../../../buttons/buttonIconText/buttonIconText';
import Context from '../../../../../services/Context';
import { useHandelSort } from '../../../../../utils/helpers/useHandelSort';

/**
 * Компонент ячейки Шапки таблицы с Иконкой Chevron
 * @param data - Принимает название колонки таблицы
 * @param key - Принимает ключ
 */
const BaseHeaderIconCell = (data: string, key: string): JSX.Element => {
  const value = useContext(Context);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { handelSort } = useHandelSort(key);

  console.log(value?.directionTime);
  console.log(value?.directionDuration);

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
        ref={buttonRef}
        id={key}
      />
    </div>
  );
};

export default BaseHeaderIconCell;
