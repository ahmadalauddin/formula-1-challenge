import {React} from 'react';

import './App.scss';
import {Header} from './components';
import AppRoutes  from './routes';


const App = () => {
  return (
    <div className="App"> 
          <Header/>
          <AppRoutes/>
    </div>
  );
}

export default App;
