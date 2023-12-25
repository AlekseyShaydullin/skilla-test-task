import { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import style from './datePicker.module.scss';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../menu/menu';
import { IOptions } from '../../utils/types/common';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';

/**
 * Компонент - DatePicker.
 * Позволяет делать выборку списка звонков по 3 дням, неделе, месяцу, году.
 * Так же можно задать конкретный интересующий интервал в формате: DD.MM.YY - DD.MM.YY
 * @example
 * <DatePicker />
 */

interface IDatePicker {
  getInterval: Dispatch<SetStateAction<string>>;
}

const DatePicker: FC<IDatePicker> = ({ getInterval }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [choiceDate, setChoiceDate] = useState<string>('threeDays');
  const [filter, setFilter] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const options = [
    { label: 'Три дня', value: 'threeDays' },
    { label: 'Неделя', value: 'week' },
    { label: 'Месяц', value: 'month' },
    { label: 'Год', value: 'year' },
  ];

  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);

    setShowDropDown(false);
    setChoiceDate(optionClick!.value);
    getInterval(optionClick!.value);
    setFilter(true);
  };

  const titleButton = options.find((option) => option.value === choiceDate);

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
        {showDropDown && (
          <Menu
            ref={menuRef}
            options={options}
            onItemClick={(e) => handleOptionClick(e.value, options)}
            layoutClassName={style.dropdown}
            checkOption={choiceDate}
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
