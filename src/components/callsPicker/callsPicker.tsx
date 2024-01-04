import { FC, useContext, useRef, useState } from 'react';

import style from './callsPicker.module.scss';

import Menu from '../menu/menu';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import {
  IOptions,
  optionsCallsLabel,
  optionsCallsValue,
} from '../../utils/types/common';
import { getDataTable } from '../../utils/helpers/getDataTable';

import Context from '../../services/Context';

/**
 * Компонент - CallsPicker
 * @returns Отрисовывает дропдаун меню "Все типы"
 * @example <CallsPicker />
 */
const CallsPicker: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);

  const value = useContext(Context);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = [
    { label: optionsCallsLabel.ALLTYPES, value: optionsCallsValue.ALLTYPES },
    { label: optionsCallsLabel.INCOMING, value: optionsCallsValue.INCOMING },
    { label: optionsCallsLabel.OUTGOING, value: optionsCallsValue.OUTGOING },
  ];

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toggleDropFilters = () => {
    setFilter(!filter);
    value?.setCallTypes(optionsCallsValue.ALLTYPES);
    getDataTable(optionsCallsValue.ALLTYPES, value!.choiceDate).then(
      (data) => value?.setData(data)
    );
  };

  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);
    const valueClick = optionClick!.value;

    setShowDropDown(false);
    value?.setCallTypes(valueClick);
    getDataTable(valueClick, value!.choiceDate).then(
      (data) => value?.setData(data)
    );
    setFilter(true);
  };

  const titleButton = options.find(
    (option) => option.value === value?.callTypes
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
      {showDropDown && value && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={(e) => handleOptionClick(e.value, options)}
          layoutClassName={style.dropdown}
          checkOption={value.callTypes}
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
