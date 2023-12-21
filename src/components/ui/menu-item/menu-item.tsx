import { FC } from 'react';
import style from './menu-item.module.scss';
import { Option } from '../../../utils/types/common';
import Icon from '../icon/icon';

interface IMenuItem {
  option: Option;
  onClick: (value: string) => void;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  extraClass?: string;
  checkOption: string;
}

const renderIcon = (icon: string | undefined) => {
  if (icon) {
    return <Icon name={icon} isColored extraClass={style.icon} />;
  }
  return null;
};

const MenuItem: FC<IMenuItem> = ({
  option,
  onClick,
  extraClass = '',
  checkOption,
}) => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={
        option.value !== checkOption
          ? `${style.item} ${extraClass}`
          : `${style.item} ${style.item_check} ${extraClass}`
      }
    >
      {' '}
      {option.label}
      {renderIcon(option.icon)}
    </div>
  );
};

export default MenuItem;
