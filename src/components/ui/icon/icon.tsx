import { FC, useId } from 'react';
import { useSvgImport } from '../../../utils/hooks/useSvgImport';

export interface IIcon {
  /** Строка для идентификации иконки. Прокидываем название иконки. */
  name: string;
  /** Можно ли управлять цветом иконки через css. Запрещено, например, для многоцветных иконок */
  isColored: boolean;
  /** Cтилизация иконки: цвет, размер, дополнительные анимации */
  extraClass?: string;
}

const Icon: FC<IIcon> = ({ name, extraClass, isColored }) => {
  const filterId = useId();
  const { SvgIcon } = useSvgImport(name);

  return (
    <svg className={extraClass} width="100%" height="100%">
      {isColored && (
        <filter id={filterId}>
          <feFlood in="SourceGraphic" floodColor="currentColor" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      )}
      {SvgIcon && (
        <image
          href={SvgIcon}
          filter={`url(#${filterId})`}
          width="100%"
          height="100%"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
        />
      )}
    </svg>
  );
};

export default Icon;
