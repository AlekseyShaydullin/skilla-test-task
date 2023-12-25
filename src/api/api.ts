import { apiUri } from '../utils/constants';
import { IParams, IResponse } from '../utils/types/api';
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

type TRequest = <T>(
  url: string,
  paramUriFirst: string,
  paramUriSecond: string,
  options: RequestInit
) => Promise<T>;

const request: TRequest = async <T>(
  uri: string,
  paramUriFirst: string,
  paramUriSecond: string,
  options: RequestInit
) => {
  const path = `${apiUri}/${uri}?${paramUriFirst}${paramUriSecond}`;
  const res = await fetch(path, options);
  const result: Promise<T> = checkRes(res);
  return result;
};

export async function getCalls(paramsUri: IParams): Promise<IData> {
  const paramUriFirst = `date_start=${paramsUri.param_one}`;
  const paramUriSecond = `&date_end=${paramsUri.param_two}`;

  return await request('getList', paramUriFirst, paramUriSecond, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer testtoken',
    },
  });
}

export async function getRecord(paramsUri: IParams): Promise<Blob> {
  const paramUriFirst = `record=${paramsUri.param_one}`;
  const paramUriSecond = `&partnership_id=${paramsUri.param_two}`;

  return await request('getRecord', paramUriFirst, paramUriSecond, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer testtoken',
      'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      'Content-Transfer-Encoding': 'binary',
      'Content-Disposition': 'filename=record.mp3',
    },
  });
}
