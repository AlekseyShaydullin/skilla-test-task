import { FC } from 'react';
import cn from 'classnames';
import style from './table-cells.module.scss';
import Typography from '../../typography/Typography';
import Icon from '../../icon/icon';
import { IResults } from '../../../../utils/types/table';
import { getRandom } from '../../../../utils/helpers/getRandom';
import { fixPhoneNumber } from '../../../../utils/helpers/fixPhoneNumber';

/**
 * Ячейки Header
 * */

/**Ячейка с текстом. Цвет текста $text-secondary */
export const baseHeaderCell = (data: string) => (
  <Typography tag="h2" className={style.secondary}>
    {data}
  </Typography>
);

/**Ячейка с текстом. Цвет текста $text-secondary и Иконокой chevron */
export const baseHeaderIconCell = (data: string) => (
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
    <Icon name="chevron" isColored extraClass={style.iconChevron} />
  </div>
);

/**
 * Ячейки Body
 * */

/**Ячейка под колонку Тип */
export const iconTypeCallCell = (data: IResults) => (
  <Icon
    name={data?.in_out === 1 ? 'call-incoming' : 'call-outgoing'}
    isColored
    extraClass={cn(
      style.iconCall,
      data?.in_out === 1 && data.time !== 0
        ? style.iconCall_blue
        : data?.in_out === 0
          ? style.iconCall_green
          : data?.status === 'Не дозвонился'
            ? style.iconCall_red
            : data?.time === 0
              ? style.iconCall_red
              : ''
    )}
  />
);

/**Ячейка под колонку Время */
export const timeCell: FC<IResults> = (data) => {
  const time = data?.date.slice(10, 16);

  return (
    <Typography tag="p" className={style.primary}>
      {time}
    </Typography>
  );
};

/**Ячейка под колонку Сотрудник */
export const avatarCell = (data: IResults) => (
  <img
    src={data?.person_avatar}
    alt="аватарка сотрудника"
    className={style.avatar}
  />
);

/**Ячейка под колонку Звонок */
export const callCell: FC<IResults> = (data) => {
  return (
    <>
      {data?.contact_name && (
        <div className={style.callNumber}>
          <Typography tag="p" className={style.primary}>
            {data.contact_name}
          </Typography>
          <Typography tag="span" className={style.secondary}>
            {fixPhoneNumber(data?.from_number)}
          </Typography>
        </div>
      )}
      <Typography tag="p" className={style.primary}>
        {fixPhoneNumber(data?.from_number)}
      </Typography>
    </>
  );
};

/**Ячейка под колонку Источник */
export const sourceCell = (data: IResults) => (
  <Typography tag="p" className={style.secondary}>
    {data?.source}
  </Typography>
);

/**Ячейка под колонку Оценка */
export const ratingCell = () => {
  const randomInt = getRandom(0, 4);

  switch (randomInt) {
    case 0:
      return null;
    case 1:
      return (
        <div className={cn(style.grade, style.grade_grate)}>
          <Typography tag="span" className={cn(style.grade__text, style.green)}>
            {'Отлично'}
          </Typography>
        </div>
      );
    case 2:
      return (
        <div className={cn(style.grade, style.grade_good)}>
          <Typography
            tag="span"
            className={cn(style.grade__text, style.primary)}
          >
            {'Хорошо'}
          </Typography>
        </div>
      );
    case 3:
      return (
        <div className={cn(style.grade, style.grade_bad)}>
          <Typography tag="span" className={cn(style.grade__text, style.red)}>
            {'Плохо'}
          </Typography>
        </div>
      );
    case 4:
      return (
        <Typography tag="span" className={style.red}>
          {'Скрипт не использован'}
        </Typography>
      );
    default:
      return null;
  }
};

/**Ячейка под колонку Длительность */

export const durationCell: FC<IResults> = (data) => {
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
