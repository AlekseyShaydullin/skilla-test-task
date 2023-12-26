import style from './baseHeaderIconCell.module.scss';
import Icon from '../../../icon/icon';
import Typography from '../../../typography/typography';
import ButtonIcon from '../../../buttons/buttonIcon/buttonIcon';

/**
 * Компонент ячейки Шапки таблицы с Иконкой Chevron
 * @param data - Принимает название колонки таблицы
 */
export const BaseHeaderIconCell = (data: string): JSX.Element => (
  <div
    className={
      data !== 'Длительность'
        ? style.wrapper
        : `${style.wrapper} ${style.wrapper_end}`
    }
  >
    <Typography tag="h2" className={style.secondary}>
      {data}
    </Typography>
    <ButtonIcon
      icon="chevron"
      isColored={true}
      extraClass={style.icon}
      buttonClass={style.button}
      // onClick={onClick}
    />
    <Icon name="chevron" isColored extraClass={style.iconChevron} />
  </div>
);
