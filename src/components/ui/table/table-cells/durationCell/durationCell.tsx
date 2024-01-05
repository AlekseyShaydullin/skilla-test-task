import cn from 'classnames';

import style from './durationCell.module.scss';

import Typography from '../../../typography/typography';
import Player from '../../../../player/player';

import { IResults } from '../../../../../utils/types/table';
import { getDuration } from '../../../../../utils/helpers/getDuration';
// import { memo } from 'react';

/**
 * Компонент ячейки для колонки Длительность
 * Отрисовывает плеер и показывает длительность разговора
 * @param data - Принимает данные с сервера
 */
const DurationCell = (
  data: IResults,
  isHovering: number | null
): JSX.Element => {
  const duration = getDuration(data.time);

  const isHovered = isHovering === data.id;

  console.log(isHovered);

  return (
    <div
      className={cn(
        style.duration,
        data.record === '' || !isHovered ? style.duration_emptyRecord : ''
      )}
    >
      {isHovered ? (
        <>
          {data.record === '' ? null : (
            <Player
              data={data}
              index={data.record}
              duration={duration}
              isHovered={isHovered}
            />
          )}
        </>
      ) : (
        <Typography tag="p" className={cn(style.primary, style.time)}>
          {duration}
        </Typography>
      )}
    </div>
  );
};
export default DurationCell;
