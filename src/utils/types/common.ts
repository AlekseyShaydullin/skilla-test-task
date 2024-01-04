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

export enum sortChecked {
  DEFAULT = 'default',
  ASC = 'asc',
  DESC = 'desc',
}

export enum optionsCallsLabel {
  ALLTYPES = 'Все типы',
  INCOMING = 'Входящие',
  OUTGOING = 'Исходящие',
}

export enum optionsCallsValue {
  ALLTYPES = 'allTypes',
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
}

export enum optionsDateLabel {
  THREEDAYS = 'Три дня',
  WEEK = 'Неделя',
  MONTH = 'Месяц',
  YEAR = 'Год',
}

export enum optionsDateValue {
  THREEDAYS = 'threeDays',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum inOut {
  INCOMING = 1,
  OUTGOING = 0,
  ABSENT = '',
}
