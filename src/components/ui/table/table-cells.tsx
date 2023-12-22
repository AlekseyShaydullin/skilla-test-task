import style from './table-cells.module.scss';
import Typography from '../typography/Typography';
import Icon from '../icon/icon';

export const baseHeaderCell = (data: string) => (
  <Typography tag="p" className={style.text}>
    {data}
  </Typography>
);

export const baseHeaderIconCell = (data: string) => (
  <div className={style.wrapper}>
    <Typography tag="p" className={style.text}>
      {data}
    </Typography>
    <Icon name="chevron" isColored extraClass={style.iconChevron} />
  </div>
);
