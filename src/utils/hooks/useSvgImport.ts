import { useEffect, useRef, useState } from 'react';

/**
 * Кастомный хук для получения иконки.
 * В пропсе получаем название иконки.
 * Возвращаем Ref с ссылкой на иконку
 * И два состояния:
 * Загрузка: loading
 * Ошибка: error
 **/

export function useSvgImport(name: string) {
  const importedIconRef = useRef<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      /** Необходимо убедиться, что все иконки располежены в одной директории */
      /** Если в коде большая база иконок, то следует в пропсах прокидывать и iconPath */
      try {
        importedIconRef.current = (
          await import(`../../assets/icons/${name}.svg`)
        ).default;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [name]);

  return { SvgIcon: importedIconRef.current, loading, error };
}
