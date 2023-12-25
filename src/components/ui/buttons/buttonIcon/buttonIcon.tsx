import { FC } from 'react';
import Icon from '../../icon/icon';
import style from './buttonIcon.module.scss';

interface IButtonIcon {
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
}

/**
 * Компонент-обёртка для кнопок с иконками без текста
 * @example
 * <ButtonIcon icon="chevron" isColored={true} extraClass={style.icon} />
 */

const ButtonIcon: FC<IButtonIcon> = ({
  icon,
  extraClass,
  isColored,
}): JSX.Element => {
  return (
    <button className={style.button}>
      <Icon name={icon} extraClass={extraClass} isColored={isColored} />
    </button>
  );
};

export default ButtonIcon;
