import { FC } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';

const Header: FC = (): JSX.Element => {
  return (
    <header className={style.header__wrapper}>
      <CallsPicker />
      <DatePicker />
    </header>
  );
};

export default Header;
