import { FC } from 'react';

import style from './callCell.module.scss';

import Typography from '../../../typography/typography';

import { IResults } from '../../../../../utils/types/table';
import { fixPhoneNumber } from '../../../../../utils/helpers/fixPhoneNumber';

/**
 * Компонент ячейки для колонки Звонок
 * @param data - Принимает данные с сервера
 */
const CallCell: FC<IResults> = (data): JSX.Element => {
  return (
    <>
      {data?.contact_name && (
        <div className={style.callNumber}>
          <Typography tag="p" className={style.primary}>
            {data.contact_name}
          </Typography>
          <Typography tag="span" className={style.secondary}>
            {fixPhoneNumber(data?.from_number)}
          </Typography>
        </div>
      )}
      {data?.contact_name === '' && (
        <Typography tag="p" className={style.primary}>
          {fixPhoneNumber(data?.from_number)}
        </Typography>
      )}
    </>
  );
};

export default CallCell;
