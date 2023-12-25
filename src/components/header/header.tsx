import { Dispatch, FC, SetStateAction } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';

interface IHeader {
  getInterval: Dispatch<SetStateAction<string>>;
  getFilter: Dispatch<SetStateAction<string>>;
}

const Header: FC<IHeader> = ({ getInterval, getFilter }): JSX.Element => {
  return (
    <header className={style.header__wrapper}>
      <CallsPicker getFilter={getFilter} />
      <DatePicker getInterval={getInterval} />
    </header>
  );
};

export default Header;
