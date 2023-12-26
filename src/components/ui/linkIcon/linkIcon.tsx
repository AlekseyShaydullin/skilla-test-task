import { FC, LegacyRef } from 'react';
import cn from 'classnames';
import style from './linkIcon.module.scss';
import Icon from '../icon/icon';

interface IButtonIcon {
  /**
   * Укажите uri
   */
  href: string;
  /**
   * Укажите название файла иконки, без его расширения
   */
  icon: string;
  /**
   * Если иконка монохромная укажите значение true
   * */
  isColored: boolean;
  /**
   * Cтилизация иконки: цвет, размер, дополнительные анимации
   * */
  extraClass?: string;
  /**
   * Cтилизация кнопки
   * */
  linkClass?: string;
  onClick?: () => void;
  ref?: LegacyRef<HTMLAnchorElement>;
}

/**
 * Компонент-обёртка для ссылки с иконкой без текста
 * @example
 * <LinkIcon
 *    href='https://skilla.ru/'
 *    icon="chevron"
 *    isColored={true}
 *    extraClass={style.icon}
 *    linkClass={style.link}
 *    onClick={onClick}
 * />
 */

const LinkIcon: FC<IButtonIcon> = ({
  href = '',
  icon,
  extraClass,
  isColored,
  linkClass = '',
  onClick,
  ref,
}): JSX.Element => {
  return (
    <a
      href={href}
      className={cn(style.link, linkClass)}
      onClick={onClick}
      ref={ref}
      target="_blank"
    >
      <Icon name={icon} extraClass={extraClass} isColored={isColored} />
    </a>
  );
};

export default LinkIcon;
