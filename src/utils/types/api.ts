// типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export type TResponseError = [string, Promise<unknown>];

export interface IParams {
  param_one: string;
  param_two: string;
  param_third?: number | string;
}

export interface IReq {
  uri: string;
  paramsUri: IParams;
}
