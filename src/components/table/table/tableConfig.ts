import { baseHeaderCell, baseHeaderIconCell } from '../../ui/table/table-cells';

/**
 * Данные шапки таблицы
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
    style: { width: '461px' },
    cellComponent: baseHeaderCell,
  },
  {
    key: 'duration',
    label: 'Длительность',
    style: { width: '110px' },
    cellComponent: baseHeaderIconCell,
  },
];
