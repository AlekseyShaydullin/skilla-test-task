import { useEffect, useState } from 'react';
import { getRecord } from '../../api/api';
import { IResults } from '../types/table';

/**
 * Хук получения записи с сервера.
 * @param data - Объект строки таблицы
 * @param isLoading - Состояние загрузки аудио в плеер true / false
 * @returns Возвращаем ссылку на удиофайл
 */
export const useGetAudioSrc = (data: IResults, isLoading: boolean): string => {
  const [record, setRecord] = useState<string>('');

  useEffect(() => {
    getRecord({ param_one: data.record, param_two: data.partnership_id }).then(
      (res) =>
        res
          .stream()
          .getReader()
          .read()
          .then((result) => {
            const blob = new Blob([result.value!], { type: 'audio/mp3' });
            const objectURL = window.URL.createObjectURL(blob);
            setRecord(objectURL);
            //     window.URL.revokeObjectURL(objectURL);
          })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return record;
};
