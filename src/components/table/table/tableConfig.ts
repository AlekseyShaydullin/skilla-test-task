import { IConfigRows, IRefColumns } from '../../../utils/types/table';
import AvatarCell from '../../ui/table/table-cells/avatarCell/avatarCell';
import { BaseHeaderCell } from '../../ui/table/table-cells/baseHeaderCell/baseHeaderCell';
import BaseHeaderIconCell from '../../ui/table/table-cells/baseHeaderIconCell/baseHeaderIconCell';
import CallCell from '../../ui/table/table-cells/callCell/callCell';
import DurationCell from '../../ui/table/table-cells/durationCell/durationCell';
import { IconTypeCallCell } from '../../ui/table/table-cells/iconTypeCallCell/iconTypeCallCell';
import RatingCell from '../../ui/table/table-cells/ratingCell/ratingCell';
import SourceCell from '../../ui/table/table-cells/sourceCell/sourceCell';
import { TimeCell } from '../../ui/table/table-cells/timeCell/timeCell';

/**
 * Конфигурации ячеек шапки таблицы
 */
export const configColumns: Array<IRefColumns> = [
  {
    key: 'type',
    label: 'Тип',
    style: { width: '54px' },
    cellComponent: BaseHeaderCell,
  },
  {
    key: 'time',
    label: 'Время',
    style: { width: '88px' },
    cellComponent: BaseHeaderIconCell,
  },
  {
    key: 'employee',
    label: 'Сотрудник',
    style: { width: '129px' },
    cellComponent: BaseHeaderCell,
  },
  {
    key: 'call',
    label: 'Звонок',
    style: { width: '325px' },
    cellComponent: BaseHeaderCell,
  },
  {
    key: 'source',
    label: 'Источник',
    style: { width: '214px' },
    cellComponent: BaseHeaderCell,
  },
  {
    key: 'rating',
    label: 'Оценка',
    style: { width: '219px' },
    cellComponent: BaseHeaderCell,
  },
  {
    key: 'duration',
    label: 'Длительность',
    style: { width: '352px', justifyContent: 'end' },
    cellComponent: BaseHeaderIconCell,
  },
];

/**
 * Конфигурация таблицы
 */
export const configRows: Array<IConfigRows> = [
  {
    style: { width: '54px' },
    cellComponent: IconTypeCallCell,
  },
  {
    style: { width: '88px' },
    cellComponent: TimeCell,
  },
  {
    style: { width: '129px' },
    cellComponent: AvatarCell,
  },
  {
    style: { width: '325px' },
    cellComponent: CallCell,
  },
  {
    style: { width: '214px' },
    cellComponent: SourceCell,
  },
  {
    style: { width: '219px' },
    cellComponent: RatingCell,
  },
  {
    style: { width: '352px' },
    cellComponent: DurationCell,
  },
];
