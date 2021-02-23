import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './pages/home/Home';

import './App.scss';

const baseUrl: string = (document.getElementsByTagName('base')[0] || {}).href;

function App() {
  return (
    <BrowserRouter
      basename={baseUrl}>
      <Route exact={true} path='/' component={Home} />
      {/*<Route path='/banners' component={Banners} />
      <Route path='/banner/:id' component={Banners} />*/}
    </BrowserRouter>
  );
}

export default App;
