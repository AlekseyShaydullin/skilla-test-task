import { FC } from 'react';

import style from './calls.module.scss';
import Typography from '../../components/ui/typography/Typography';
import Icon from '../../components/ui/icon/icon';

const Calls: FC = (): JSX.Element => {
  return (
    <>
      <Typography tag="h2" className={style.title}>
        Привет тест
      </Typography>
      <Icon name="avatar" isColored={false} />
    </>
  );
};

export default Calls;
