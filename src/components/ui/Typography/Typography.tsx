import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './typography.module.scss';

interface IProps {
  /**
   * тэг-обёртка `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'`
   */
  tag: 'h2' | 'p' | 'span';
  children: ReactNode;
  /**
   * класс для дополнительной стилизации компонента
   */
  className?: string;
  /**
   * `primary` === `SF Pro Display`, `secondary` === На перспективу для масштабирования
   */
  fontFamily?: 'primary' | 'secondary';
}

/**
 * Компонент-обёртка для текстовых элементов
 * @example
 * <Typography tag="h2" fontFamily="secondary">
 *  Выводимый текст
 * </Typography>
 */
const Typography: FC<IProps> = ({
  tag,
  children,
  className,
  fontFamily = 'primary',
}) => {
  const Tag = tag;

  return (
    <Tag className={cn(style[`${fontFamily}_${tag}`], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
