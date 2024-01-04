import { FC, ReactNode } from 'react';
import cn from 'classnames';

import style from './typography.module.scss';

interface IProps {
  /**
   * тэг-обёртка `'h2' | 'p' | 'span'`
   */
  tag: 'h2' | 'p' | 'span';
  children: ReactNode;
  /**
   * класс для дополнительной стилизации компонента
   */
  className?: string;
  /**
   * По умолчанию стоит `primary`
   * `primary` === `SF Pro Display`, `secondary` === На перспективу для масштабирования
   */
  fontFamily?: 'primary' | 'secondary';
}

/**
 * Компонент-обёртка для текстовых элементов
 * @example
 * <Typography tag="h2" fontFamily="secondary" className={style.title}>
 *  Выводимый текст
 * </Typography>
 */
const Typography: FC<IProps> = ({
  tag,
  children,
  className,
  fontFamily = 'primary',
}): JSX.Element => {
  const Tag = tag;

  return (
    <Tag className={cn(style[`${fontFamily}_${tag}`], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
