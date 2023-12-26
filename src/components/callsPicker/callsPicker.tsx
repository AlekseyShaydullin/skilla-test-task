import { FC, useContext, useRef, useState } from 'react';
import style from './callsPicker.module.scss';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import { IOptions } from '../../utils/types/common';
import Context from '../../services/Context';

const CallsPicker: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [callTypes, setCallTypes] = useState<string>('allTypes');
  const [filter, setFilter] = useState<boolean>(false);

  const value = useContext(Context);

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
    value?.setFilter('allTypes');
  };

  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);

    setShowDropDown(false);
    setCallTypes(optionClick!.value);
    value?.setFilter(optionClick!.value);
    setFilter(true);
  };

  const titleButton = options.find((option) => option.value === callTypes);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );

  return (
    <section className={style.filters}>
      <ButtonIconText
        icon="chevron"
        tag="h2"
        title={titleButton!.label}
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
          onItemClick={(e) => handleOptionClick(e.value, options)}
          layoutClassName={style.dropdown}
          checkOption={callTypes}
          itemClassName={style.itemParent}
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
