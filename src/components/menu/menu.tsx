import { forwardRef } from 'react';
import cn from 'classnames';

import style from './menu.module.scss';
import MenuItem from '../ui/menu-item/menu-item';
import { Option } from '../../utils/types/common';

export interface IMenu {
  /**
   * Набор полей меню, массив объектов формата `{label: string; value: string; icon?: string;}`
   */
  options: Option[];
  /**
   * callback при клике на элемент меню
   */
  onItemClick: (option: Option) => void;
  /**
   * Чтобы перезаписать свойства Menu, в scss файле родителя повысьте селективность,
   * например: ```div.dropdown { padding: 10px 0;}``` */
  layoutClassName?: string;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  itemClassName?: string;
  /**
   * включить/выключить прокрутку в меню
   */
  isScroll?: boolean;
  /**
   * Выбранная опция в меню
   */
  checkOption: string;
}

type Ref = HTMLDivElement;

/**
 * Компонент для создания меню
 * @example
 * <Menu
 *   ref={menuRef}
 *   options={options}
 *   onItemClick={(e) => handleOptionClick(e.value)}
 *   layoutClassName={stylesCard.dropdown}
 *  />
 */

const Menu = forwardRef<Ref, IMenu>(
  (
    {
      options,
      onItemClick,
      layoutClassName = '',
      itemClassName = '',
      isScroll = false,
      checkOption,
    },
    ref
  ) => {
    let containerCN = cn(style.box, layoutClassName);

    if (isScroll) {
      containerCN += ` ${style.scroll}`;
    }

    return (
      <div className={containerCN} ref={ref}>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              option={{ ...option }}
              onClick={() => onItemClick(option)}
              extraClass={itemClassName}
              checkOption={checkOption}
            />
          );
        })}
      </div>
    );
  }
);

export default Menu;
