import Typography from '../ui/Typography/Typography';
import Icon from '../ui/icon/icon';
import style from './App.module.scss';

function App() {
  return (
    <>
      <Typography tag="h2" className={style.title}>
        Привет тест
      </Typography>
      <Icon name="avatar" isColored={false} />
    </>
  );
}

export default App;
