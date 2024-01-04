import { FC } from 'react';

import style from './header.module.scss';

import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';

/**
 * Компонет - Header
 * @returns Отрисовывает шапку приложения
 * @example <Header />
 */
const Header: FC = (): JSX.Element => {
  return (
    <header className={style.header__wrapper}>
      <CallsPicker />
      <DatePicker />
    </header>
  );
};

export default Header;
