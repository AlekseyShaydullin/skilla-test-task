import { useEffect } from 'react';

/**
 * Хук, добавляет click EventListener на document
 * @param callback функция, срабатывает при нажатии на esc
 */
const useEscapeKey = (callback: () => void): void => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback]);
};

export default useEscapeKey;
