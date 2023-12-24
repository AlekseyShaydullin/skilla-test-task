import {
  avatarCell,
  baseHeaderCell,
  baseHeaderIconCell,
  callCell,
  durationCell,
  iconTypeCallCell,
  ratingCell,
  sourceCell,
  timeCell,
} from '../../ui/table/table-cells/table-cells';

/**
 * Данные ячеек шапки таблицы
 */
export const refColumns = [
  {
    key: 'type',
    label: 'Тип',
    style: { width: '54px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'time',
    label: 'Время',
    style: { width: '88px' },
    cellComponent: baseHeaderIconCell,
  },
  {
    key: 'employee',
    label: 'Сотрудник',
    style: { width: '129px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'call',
    label: 'Звонок',
    style: { width: '325px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'source',
    label: 'Источник',
    style: { width: '214px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'rating',
    label: 'Оценка',
    style: { width: '219px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'duration',
    label: 'Длительность',
    style: { width: '352px', justifyContent: 'end' },
    cellComponent: baseHeaderIconCell,
  },
];

/**
 * Данные ячеек шапки таблицы
 */

export const configRows = [
  {
    style: { width: '54px' },
    cellComponent: iconTypeCallCell,
  },
  {
    style: { width: '88px' },
    cellComponent: timeCell,
  },
  {
    style: { width: '129px' },
    cellComponent: avatarCell,
  },
  {
    style: { width: '325px' },
    cellComponent: callCell,
  },
  {
    style: { width: '214px' },
    cellComponent: sourceCell,
  },
  {
    style: { width: '219px' },
    cellComponent: ratingCell,
  },
  {
    style: { width: '352px' },
    cellComponent: durationCell,
  },
];
