import { FC } from 'react';
import cn from 'classnames';
import style from './durationCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/typography';
import { getDuration } from '../../../../../utils/helpers/getDuration';
import Player from '../../../../player/player';

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
