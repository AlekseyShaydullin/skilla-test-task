import { FC, useContext, useEffect, useState } from 'react';
import style from './header.module.scss';
import DatePicker from '../datePicker/datePicker';
import CallsPicker from '../callsPicker/callsPicker';
import { getCalls } from '../../api/api';
import { getEndDate, getStartDate } from '../../utils/helpers/getDate';
import Context from '../../services/Context';

const Header: FC = (): JSX.Element => {
  const [callTypes, setCallTypes] = useState<string>('allTypes');
  const [choiceDate, setChoiceDate] = useState<string>('threeDays');

  const value = useContext(Context);

  const dateStart = getStartDate(choiceDate);
  const dateEnd = getEndDate();

  useEffect(() => {
    getCalls({ param_one: dateStart, param_two: dateEnd, param_third: '' })
      .then((res) => value?.setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  //Делаем запросы на сервер в зависимости от фильтра:
  // const data = useGetData(choiceDate, callTypes);

  // value?.setData(data);

  return (
    <header className={style.header__wrapper}>
      <CallsPicker
        choiceDate={choiceDate}
        callTypes={callTypes}
        setCallTypes={setCallTypes}
      />
      <DatePicker
        choiceDate={choiceDate}
        callTypes={callTypes}
        setChoiceDate={setChoiceDate}
      />
    </header>
  );
};

export default Header;
