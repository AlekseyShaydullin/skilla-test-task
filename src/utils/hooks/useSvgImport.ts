import { FC, SVGProps, useEffect, useRef, useState } from 'react';

export function useSvgImport(name: string) {
  const importedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  console.log(name);

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      /** Необходимо убедиться, что все иконки располежены в одной директории */
      /** Если в коде большая база иконок, то следует в пропсах прокидывать и iconPath */
      try {
        importedIconRef.current = (
          await import(`../../assets/icons/${name}.tsx`)
        ).default;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
    console.log(importedIconRef.current);
  }, [name]);

  return { SvgIcon: importedIconRef.current, loading, error };
}
