import { FC, useId } from 'react';
import { useSvgImport } from '../../../utils/hooks/useSvgImport';

export interface IIcon {
  /** Строка для идентификации иконки. Прокидыываем название иконки. */
  name: string;
  /** Cтилизация иконки: цвет, размер, дополнительные анимации */
  extraClass?: string;
  /** Можно задать пропсом svg параметры */
  svgProp?: React.SVGProps<SVGSVGElement>;
}

const Icon: FC<IIcon> = ({ name, extraClass, svgProp }) => {
  const { loading, SvgIcon } = useSvgImport(name);
  const filterId = useId();

  console.log(SvgIcon);
  console.log(loading);

  return (
    <svg className={extraClass} width="100%" height="100%">
      <filter id={filterId}>
        <feFlood in="SourceGraphic" floodColor="currentColor" />
        <feComposite in2="SourceAlpha" operator="in" />
      </filter>
      {SvgIcon && <SvgIcon {...svgProp} />}
    </svg>
  );
};

export default Icon;
