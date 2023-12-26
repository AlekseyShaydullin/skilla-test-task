import style from './baseHeaderIconCell.module.scss';
import Typography from '../../../typography/typography';
import ButtonIcon from '../../../buttons/buttonIcon/buttonIcon';
import { useRef, useState } from 'react';
import { sortChecked } from '../../../../../utils/types/common';

/**
 * Компонент ячейки Шапки таблицы с Иконкой Chevron
 * @param data - Принимает название колонки таблицы
 */
const BaseHeaderIconCell = (data: string, key: string): JSX.Element => {
  const [directionTime, setDirectionTime] = useState<sortChecked>(
    sortChecked.Default
  );
  const [directionDuration, setDirectionDuration] = useState<sortChecked>(
    sortChecked.Default
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handelSort = () => {
    if (buttonRef.current && buttonRef.current.id === 'time') {
      switch (directionTime) {
        case 'default':
          setDirectionTime(sortChecked.ASC);
          break;
        case 'asc':
          setDirectionTime(sortChecked.DESC);
          break;
        case 'desc':
          setDirectionTime(sortChecked.ASC);
          break;
        default:
          setDirectionTime(sortChecked.Default);
          break;
      }
    } else {
      switch (directionDuration) {
        case 'default':
          setDirectionDuration(sortChecked.ASC);
          break;
        case 'asc':
          setDirectionDuration(sortChecked.DESC);
          break;
        case 'desc':
          setDirectionDuration(sortChecked.ASC);
          break;
        default:
          setDirectionDuration(sortChecked.Default);
          break;
      }
    }
  };

  console.log(buttonRef.current && buttonRef.current.id);

  console.log(directionDuration);

  return (
    <div
      className={
        data !== 'Длительность'
          ? style.wrapper
          : `${style.wrapper} ${style.wrapper_end}`
      }
    >
      <Typography tag="h2" className={style.secondary}>
        {data}
      </Typography>
      <ButtonIcon
        icon="chevron"
        isColored
        extraClass={style.iconChevron}
        buttonClass={style.button}
        onClick={handelSort}
        id={key}
        ref={buttonRef}
      />
    </div>
  );
};

export default BaseHeaderIconCell;
