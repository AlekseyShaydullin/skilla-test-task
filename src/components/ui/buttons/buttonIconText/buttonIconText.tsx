import { FC } from 'react';
import cn from 'classnames';
import Typography from '../../typography/Typography';
import style from './buttonIconText.module.scss';
import Icon from '../../icon/icon';

interface IButtonIconText {
  /**
   * Укажите название иконки
   */
  icon: string;
  /**
   * Укажите тег title: `'h2' | 'p' | 'span'`
   */
  tag: 'h2' | 'p' | 'span';
  /**
   * Укажите название кнопки
   * */
  title: string;
  /**
   * Если иконка монохромная укажите значение true
   * */
  isColored: boolean;
  /**
   * Cтилизация самой кнопки: цвет, размер, дополнительные анимации
   * */
  buttonClass?: string;
  /**
   * Cтилизация иконки: цвет, размер, дополнительные анимации
   * */
  iconClass?: string;
  /**
   * Cтилизация текста: цвет, размер, ховеры
   * */
  titleClass?: string;
  /**
   * Можно управлять стилизацией. Иконка первая? тогда пиши true
   * */
  iconFirst: boolean;
}

/**
 * Компонент-обёртка для кнопок с иконками и текстом
 * @example
 * <ButtonIconText icon="chevron" tag="h2" title="Название кнопки" isColored={true} extraClass={style.icon} iconFirst={true} />
 */

const ButtonIconText: FC<IButtonIconText> = ({
  icon,
  tag,
  title,
  buttonClass,
  iconClass,
  titleClass,
  isColored,
  iconFirst,
}) => {
  return (
    <button className={cn(style[`button`], buttonClass)}>
      {!iconFirst && (
        <Typography tag={tag} className={titleClass}>
          {title}
        </Typography>
      )}
      <Icon name={icon} isColored={isColored} extraClass={iconClass} />
      {iconFirst && (
        <Typography tag={tag} className={titleClass}>
          {title}
        </Typography>
      )}
    </button>
  );
};

export default ButtonIconText;
