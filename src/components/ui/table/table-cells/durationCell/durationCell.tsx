/**Ячейка под колонку Длительность */

import { FC } from 'react';
import cn from 'classnames';
import style from './durationCell.module.scss';
import { IResults } from '../../../../../utils/types/table';
import Typography from '../../../typography/typography';
// import { getRecord } from '../../../../../api/api';

/**
 * Компонент ячейки для колонки Длительность
 * Отрисовывает плеер и показывает длительность разговора
 * @param data - Принимает данные с сервера
 */
const DurationCell: FC<IResults> = (data): JSX.Element => {
  // const [record, setRecord] = useState('');
  const currentTime = data?.time;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  // useEffect(() => {
  //   if (data.record === '') {
  //     return;
  //   }
  //   getRecord({ param_one: data.record, param_two: data.partnership_id })
  //     .then((res) => new Blob([res]))
  //     .then((blob) => {
  //       const objectURL = URL.createObjectURL(blob);
  //       console.log(objectURL);
  //       setRecord(objectURL);
  //       URL.revokeObjectURL(objectURL);
  //     })
  //     .catch((err) => console.error(err));
  // }, [data.partnership_id, data.record]);

  // const download = async () => {
  //   try {
  //     const { res } = await getRecord({
  //       param_one: data.record,
  //       param_two: data.partnership_id,
  //     });
  //     const url = URL.createObjectURL(new Blob([res]));
  //     setRecord(url);
  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     onError();
  //   }
  // };

  // download();

  return (
    <div className={style.duration}>
      {currentTime === 0 ? null : (
        <audio controls className={style.record}>
          <source src={'#'} type="audio/mpeg" />
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
