import { FC } from 'react';
import Typography from '../../typography/Typography';
import style from './buttonIcon.module.scss';
import Icon from '../../icon/icon';

const ButtonIcon: FC = () => {
  return (
    <button className={style.button}>
      <Typography tag="h2">Все типы</Typography>
      <Icon name="chevron" isColored extraClass={style.icon} />
    </button>
  );
};

export default ButtonIcon;
