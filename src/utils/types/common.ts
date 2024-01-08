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

/** Опции сортировки */
export enum sortChecked {
  DEFAULT = 'default',
  ASC = 'asc',
  DESC = 'desc',
}

/** Опции лэйблов для дропдауна Calls Picker */
export enum optionsCallsLabel {
  ALLTYPES = 'Все типы',
  INCOMING = 'Входящие',
  OUTGOING = 'Исходящие',
}

/** Опции значений для дропдауна Calls Picker */
export enum optionsCallsValue {
  ALLTYPES = 'allTypes',
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
}

/** Опции лэйблов для дропдауна Date Picker */
export enum optionsDateLabel {
  THREEDAYS = 'Три дня',
  WEEK = 'Неделя',
  MONTH = 'Месяц',
  YEAR = 'Год',
}

/** Опции значений для дропдауна Date Picker */
export enum optionsDateValue {
  THREEDAYS = 'threeDays',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

/** Опции значений для определния входящих или исходящих звонков */
export enum inOut {
  INCOMING = 1,
  OUTGOING = 0,
  ABSENT = '',
}
