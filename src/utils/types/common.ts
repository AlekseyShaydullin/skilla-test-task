/**
 * Типизация роутов
 */
export interface IRoutesUrl {
  readonly [name: string]: string;
}

/**
 * Типизация опций меню
 */
export interface IOptions {
  label: string;
  value: string;
  icon?: string;
}

/**
 * Типизация данных шапки таблицы
 */

export interface refCols {
  key: string;
  label: string;
  style: {
    width: string;
  };
  cellComponent: (data: string) => JSX.Element;
}
