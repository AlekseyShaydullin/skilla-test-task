import { Route, Routes } from 'react-router-dom';
import routesUrl from '../../utils/routes/routesUrl';
import Calls from '../../pages/calls/calls';
import NotFound from '../../pages/not-found';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={routesUrl.callsPage} element={<Calls />}></Route>
      <Route path={routesUrl.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
