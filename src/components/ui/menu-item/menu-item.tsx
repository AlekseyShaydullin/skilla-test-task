import { FC } from 'react';
import style from './menu-item.module.scss';
import { IOptions } from '../../../utils/types/common';
import Icon from '../icon/icon';

interface IMenuItem {
  option: IOptions;
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
}): JSX.Element => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={
        option.value !== checkOption
          ? `${style.item} ${extraClass}`
          : `${style.item} ${extraClass} ${style.check} `
      }
    >
      {' '}
      {option.label}
      {renderIcon(option.icon)}
    </div>
  );
};

export default MenuItem;
