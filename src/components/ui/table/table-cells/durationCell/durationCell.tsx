/**Ячейка под колонку Длительность */

import { FC } from 'react';
import cn from 'classnames';
import style from './durationCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/Typography';

/**
 * Компонент ячейки для колонки Длительность
 * Отрисовывает плеер и показывает длительность разговора
 * @param data - Принимает данные с сервера
 */
const DurationCell: FC<IResults> = (data) => {
  const currentTime = data?.time;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  return (
    <div className={style.duration}>
      {currentTime === 0 ? null : (
        <audio controls className={style.record}>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
        </audio>
      )}
      {currentTime === 0 && null}
      {minutes === 0 && currentTime !== 0 && currentTime < 10 && (
        <Typography tag="p" className={cn(style.primary, style.time)}>
          {`00:0${currentTime}`}
        </Typography>
      )}
      {minutes === 0 && currentTime !== 0 && currentTime >= 10 && (
        <Typography tag="p" className={cn(style.primary, style.time)}>
          {`00:${currentTime}`}
        </Typography>
      )}
      {currentTime !== 0 && currentTime > 59 && (
        <Typography tag="p" className={cn(style.primary, style.time)}>
          {`0${minutes}:${seconds}`}
        </Typography>
      )}
      {minutes > 9 && currentTime !== 0 && (
        <Typography tag="p" className={cn(style.primary, style.time)}>
          {`${minutes}:${seconds}`}
        </Typography>
      )}
    </div>
  );
};

export default DurationCell;
