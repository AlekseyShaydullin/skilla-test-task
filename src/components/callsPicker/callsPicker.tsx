import { FC, useRef, useState } from 'react';
import style from './callsPicker.module.scss';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';

const CallsPicker: FC = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [callTypes, setCallTypes] = useState<string>('allTypes');
  const [filter, setFilter] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = [
    { label: 'Все типы', value: 'allTypes' },
    { label: 'Входящие', value: 'incoming' },
    { label: 'Исходящие', value: 'outgoing' },
  ];

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toggleDropFilters = () => {
    setFilter(!filter);
    setCallTypes('allTypes');
  };

  const handleOptionClick = (e: string) => {
    setShowDropDown(false);
    if (e === 'allTypes') {
      setCallTypes('allTypes');
      console.log('allTypes');
    }
    if (e === 'incoming') {
      setCallTypes('incoming');
      console.log('incoming');
    }
    if (e === 'outgoing') {
      setCallTypes('outgoing');
      console.log('outgoing');
    }
    setFilter(true);
  };

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );

  console.log(showDropDown);
  return (
    <section className={style.filters}>
      <ButtonIconText
        icon="chevron"
        tag="h2"
        title={
          callTypes === 'allTypes'
            ? 'Все типы'
            : callTypes === 'incoming'
              ? 'Входящие'
              : 'Исходящие'
        }
        iconClass={!showDropDown ? style.icon : style.iconOpen}
        titleClass={
          filter ? `${style.title} ${style.title_filter}` : `${style.title}`
        }
        isColored
        iconFirst={false}
        onClick={toggleDropDown}
        ref={buttonRef}
      />
      {showDropDown && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={(e) => handleOptionClick(e.value)}
          layoutClassName={style.dropdown}
          checkOption={callTypes}
        />
      )}
      {filter && (
        <ButtonIconText
          icon="close"
          tag="h2"
          title="Сбросить фильтры"
          isColored
          buttonClass={style.closeButton}
          iconClass={style.icon}
          titleClass={style.title}
          iconFirst={false}
          onClick={toggleDropFilters}
        />
      )}
    </section>
  );
};

export default CallsPicker;
