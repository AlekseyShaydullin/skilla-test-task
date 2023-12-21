import { FC } from 'react';
import style from './datePicker.module.scss';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

/**
 * Компонент - DatePicker.
 * Позволяет делать выборку списка звонков по 3 дням, неделе, месяцу, году.
 * Так же можно задать конкретный интересующий интервал в формате: DD.MM.YY - DD.MM.YY
 * @example
 * <DatePicker />
 */

const DatePicker: FC = () => {
  return (
    <section className={style.datePicker__wrapper}>
      <ButtonIcon
        icon="chevron"
        isColored={true}
        extraClass={style.iconChevronLeft}
      />
      <ButtonIconText
        icon="calendar"
        tag="h2"
        title="3 дня"
        isColored
        buttonClass={style.button}
        iconClass={style.iconCalendar}
        titleClass={style.title}
        iconFirst
      />
      <ButtonIcon
        icon="chevron"
        isColored={true}
        extraClass={style.iconChevronRight}
      />
    </section>
  );
};

export default DatePicker;
