import { apiUri } from '../utils/constants';
import { IParams, IResponse, TRequest } from '../utils/types/api';
import { IData } from '../utils/types/table';

/**
 * @template T
 * @param {IResponse<T>} res объект с полученным от сервера ответом. Должен иметь метод .json()
 * @returns {(Promise<T> | Promise<never>)} промис с парсированным объектом response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
export function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

/**
 * @template T
 * @param {IResponse<T>} res объект с полученным от сервера ответом. Должен иметь метод .blob()
 * @returns {Promise<Blob>} промис с парсированным response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
export function checkResBlob<T>(res: IResponse<T>): Promise<Blob> {
  if (res.ok) {
    const blob = res.blob();
    return blob;
  }
  return Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

/**
 * Функция - Шаблон запроса с парсированным объектом response методом .json()
 * @param uri Адрес ручки запроса
 * @param paramUriFirst Начальная дата выборки звонков
 * @param paramUriSecond Конечная дата выборки звонков
 * @param options Опции запроса
 * @param paramUriThird Не обязательный параметор - Признак входящего или исходящего звонка
 * @returns {Promise<T>} промис с парсированным объектом response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
const request: TRequest = async <T>(
  uri: string,
  paramUriFirst: string,
  paramUriSecond: string,
  options: RequestInit,
  paramUriThird?: string
): Promise<T> => {
  const path = `${apiUri}/${uri}?${paramUriFirst}${paramUriSecond}${paramUriThird}`;

  const res = await fetch(path, options);
  const result: Promise<T> = checkRes(res);
  return result;
};

/**
 * Функция - Шаблон запроса с парсированным объектом response методом .blob()
 * @param uri Адрес ручки запроса
 * @param paramUriFirst Параметр - id записи
 * @param paramUriSecond Параметр - id партнера
 * @param options Опции запроса
 * @returns {Promise<Blob>} промис с парсированным объектом response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
async function requestBlob(
  uri: string,
  paramUriFirst: string,
  paramUriSecond: string,
  options: RequestInit
): Promise<Blob> {
  const path = `${apiUri}/${uri}?${paramUriFirst}${paramUriSecond}`;
  const res = await fetch(path, options);
  const result: Promise<Blob> = checkResBlob(res);
  return result;
}

/**
 * Функция - Получить список звонков
 * @param paramsUri - Параметры для uri
 * @returns {Promise<IData>} Промис со списком звонков
 */
export async function getCalls(paramsUri: IParams): Promise<IData> {
  const paramUriFirst = `date_start=${paramsUri.param_one}`;
  const paramUriSecond = `&date_end=${paramsUri.param_two}`;
  const paramUriThird = `${paramsUri.param_third}`;

  return await request(
    'getList',
    paramUriFirst,
    paramUriSecond,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-type': 'application/json',
      },
    },
    paramUriThird
  );
}

/**
 * Функция - Получить запись звонка
 * @param paramsUri Параметры для uri
 * @returns {Promise<Blob>} Промис с файлом в формате mp3
 */
export async function getRecord(paramsUri: IParams): Promise<Blob> {
  const paramUriFirst = `record=${paramsUri.param_one}`;
  const paramUriSecond = `&partnership_id=${paramsUri.param_two}`;

  return await requestBlob('getRecord', paramUriFirst, paramUriSecond, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer testtoken',
      'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      'Content-Transfer-Encoding': 'binary',
      'Content-Disposition': 'filename=record.mp3',
    },
  });
}

/**
 * Функция - Получить список звонков с выборкой входящего или исходящего звонка
 * @param paramsUri Параметры для uri
 * @returns {Promise<IData>} Промис со списком звонков
 */
export async function getFilterCalls(paramsUri: IParams): Promise<IData> {
  const paramUriFirst = `date_start=${paramsUri.param_one}`;
  const paramUriSecond = `&date_end=${paramsUri.param_two}`;
  const paramUriThird = `&in_out=${paramsUri.param_third}`;

  return await request(
    'getList',
    paramUriFirst,
    paramUriSecond,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-type': 'application/json',
      },
    },
    paramUriThird
  );
}
