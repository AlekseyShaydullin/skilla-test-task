import { FC } from 'react';
import cn from 'classnames';

import style from './durationCell.module.scss';

import Typography from '../../../typography/typography';
import Player from '../../../../player/player';

import { IResults } from '../../../../../utils/types/table';
import { getDuration } from '../../../../../utils/helpers/getDuration';

/**
 * Компонент ячейки для колонки Длительность
 * Отрисовывает плеер и показывает длительность разговора
 * @param data - Принимает данные с сервера
 */
const DurationCell: FC<IResults> = (data): JSX.Element => {
  const duration = getDuration(data.time);

  return (
    <div
      className={cn(
        style.duration,
        data.record === '' ? style.duration_emptyRecord : ''
      )}
    >
      {data.record === '' ? null : (
        <Player data={data} index={data.record} duration={duration} />
      )}
      <Typography tag="p" className={cn(style.primary, style.time)}>
        {duration}
      </Typography>
    </div>
  );
};

export default DurationCell;
