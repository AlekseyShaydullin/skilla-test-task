import { FC, useContext, useRef, useState } from 'react';

import style from './datePicker.module.scss';

import Menu from '../menu/menu';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

import {
  IOptions,
  optionsDateLabel,
  optionsDateValue,
} from '../../utils/types/common';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import { getDataTable } from '../../utils/helpers/getDataTable';

import Context from '../../services/Context';

/**
 * Компонент - DatePicker.
 * @returns Отрисовывает дропдаун меню
 * Позволяет делать времянную выборку звонков: 3 дня, Неделя, Месяц, Год.
 * @example <DatePicker />
 */
const DatePicker: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);

  const value = useContext(Context);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const options = [
    { label: optionsDateLabel.THREEDAYS, value: optionsDateValue.THREEDAYS },
    { label: optionsDateLabel.WEEK, value: optionsDateValue.WEEK },
    { label: optionsDateLabel.MONTH, value: optionsDateValue.MONTH },
    { label: optionsDateLabel.YEAR, value: optionsDateValue.YEAR },
  ];

  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);
    const valueClick = optionClick!.value;

    console.log(valueClick);

    setShowDropDown(false);
    value?.setChoiceDate(valueClick);
    getDataTable(value!.callTypes, valueClick).then(
      (data) => value?.setData(data)
    );
    setFilter(true);
  };

  const titleButton = options.find(
    (option) => option.value === value?.choiceDate
  );

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );

  return (
    <section className={style.datePicker__wrapper}>
      <ButtonIcon
        icon="chevron"
        isColored={true}
        extraClass={style.iconChevronLeft}
      />
      <div className={style.dropdown__wrapper}>
        <ButtonIconText
          icon="calendar"
          tag="h2"
          title={titleButton!.label}
          isColored
          buttonClass={style.button}
          iconClass={style.iconCalendar}
          titleClass={
            filter ? `${style.title} ${style.title_filter}` : `${style.title}`
          }
          iconFirst
          onClick={toggleDropDown}
          ref={buttonRef}
        />
        {showDropDown && value && (
          <Menu
            ref={menuRef}
            options={options}
            onItemClick={(e) => handleOptionClick(e.value, options)}
            layoutClassName={style.dropdown}
            checkOption={value.choiceDate}
            itemClassName={style.itemParent}
          />
        )}
      </div>
      <ButtonIcon
        icon="chevron"
        isColored={true}
        extraClass={style.iconChevronRight}
      />
    </section>
  );
};

export default DatePicker;
