import { FC } from 'react';

import style from './tableTitle.module.scss';

import Typography from '../../typography/typography';

import { IFormateCall } from '../../../../utils/helpers/getTitleCalls';

interface ITableTitle {
  calls: IFormateCall;
}

/**
 * Компонент - TableTitle.
 * @param calls Принимает данные отфильтрованные и отсортированные и разбитые по дням
 * @returns Отрисовывает заголовок-дату таблицы и количесвто звонков в этот день
 * @example <TableTitle calls={calls} />
 */
const TableTitle: FC<ITableTitle> = ({ calls }): JSX.Element => {
  return (
    <td>
      <div className={style.titleWrapper}>
        <Typography tag="p" className={style.primary}>
          {calls.dateTitle}
        </Typography>
        <Typography tag="span" className={style.span}>
          {calls.calls.length}
        </Typography>
      </div>
    </td>
  );
};

export default TableTitle;
