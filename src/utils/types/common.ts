/**
 * Типизация роутов
 */
export interface IRoutesUrl {
  readonly [name: string]: string;
}

/**
 * Типизация опций меню
 */
export type Option = {
  label: string;
  value: string;
  icon?: string;
};
