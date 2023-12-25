import { Dispatch, FC, SetStateAction } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';

interface IHeader {
  getInterval: Dispatch<SetStateAction<string>>;
}

const Header: FC<IHeader> = ({ getInterval }) => {
  return (
    <header className={style.header__wrapper}>
      <CallsPicker />
      <DatePicker getInterval={getInterval} />
    </header>
  );
};

export default Header;
