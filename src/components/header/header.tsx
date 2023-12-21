import { FC } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

const Header: FC = () => {
  return (
    <header className={style.wrapper}>
      <ButtonIconText
        icon="chevron"
        tag="h2"
        title="Все типы"
        iconClass={style.icon}
        titleClass={style.title}
        isColored={true}
        iconFirst={false}
      />
      <DatePicker />
    </header>
  );
};

export default Header;
