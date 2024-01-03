import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';
import { getCalls } from '../../api/api';
import { getEndDate, getStartDate } from '../../utils/helpers/getDate';
import { IResults } from '../../utils/types/table';
// import Context from '../../services/Context';

interface IHeader {
  setData: Dispatch<SetStateAction<IResults[] | null>>;
}

const Header: FC<IHeader> = ({ setData }): JSX.Element => {
  const [callTypes, setCallTypes] = useState<string>('allTypes');
  const [choiceDate, setChoiceDate] = useState<string>('threeDays');

  const dateStart = getStartDate(choiceDate);
  const dateEnd = getEndDate();

  useEffect(() => {
    getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <header className={style.header__wrapper}>
      <CallsPicker
        choiceDate={choiceDate}
        callTypes={callTypes}
        setCallTypes={setCallTypes}
        setData={setData}
      />
      <DatePicker
        choiceDate={choiceDate}
        callTypes={callTypes}
        setChoiceDate={setChoiceDate}
        setData={setData}
      />
    </header>
  );
};

export default Header;
