import Icon from '../ui/icon/icon';
import style from './App.module.scss';

function App() {
  return (
    <>
      <h1 className={style.title}>Привет тест</h1>
      <Icon name="avatar" isColored={false} />
    </>
  );
}

export default App;
