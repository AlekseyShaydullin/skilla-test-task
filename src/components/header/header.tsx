import { FC } from 'react';
import style from './header.module.scss';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

const Header: FC = () => {
  return (
    <header className={style.wrapper}>
      <ButtonIcon />
      <button>3 дня</button>
    </header>
  );
};

export default Header;
