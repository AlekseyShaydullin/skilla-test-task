import Icon from '../ui/icon/icon';
import style from './App.module.css';

function App() {
  return (
    <>
      <h1>Привет тест</h1>
      <Icon
        extraClass={style.icon}
        name="property1Incoming"
        svgProp={{ width: 100, height: 100, fill: '#61dafb' }}
      />
    </>
  );
}

export default App;
